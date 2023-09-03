import { NavLink } from "react-router-dom"
import "./style/navBar.scss"

type navigation = {
    link :string,
    className:string,
    name:string,
}

type navProps = {
    navbar:navigation[];
}

const NavBar: React.FC<navProps> = ({navbar}) => {
  return (
    <div className="mainNavBar">
        {navbar.map((nav, index) => (
          <NavLink to={nav.link} className={nav.className} key={index}>
            {nav.name}
          </NavLink>
        ))}
    </div>
  );
}

export default NavBar