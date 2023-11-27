import { Link } from "react-router-dom";

type navigate = {
  link:string,
  name:string,
  className:string,
  
}

type Navigation = {
  navLinks:navigate[];
  navbarStyle: React.CSSProperties;
 
  }


const NavBar: React.FC<Navigation> = ({ navLinks, navbarStyle}) => {

  
  
return (
    <section style={navbarStyle} className="nav">
    {navLinks.map((navLink, index) =>(
      <Link 
      style={navbarStyle}
       to={navLink.link}
       key={index}
       className={navLink.className}
        >{navLink.name}
       </Link>
       
     ))}
    
    </section>
  );
}

export default NavBar