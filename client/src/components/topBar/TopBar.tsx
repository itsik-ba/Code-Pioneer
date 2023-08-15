import { Link } from "react-router-dom"
import "./style__TopBar/styleTopBar.scss";


const TopBar = () => {
  return (
    <div className="main">
      
        <Link to={"/FrontEnd"} className="frontEnd">FrontEnd</Link>
        <Link to={"/"} className="homePage">Home</Link>
        <Link to={"/BackEnd"} className="backEnd">BackEnd</Link>
      
    </div>
  )
}

export default TopBar