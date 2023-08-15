import { Link } from "react-router-dom"
import "./style/frontend.scss"


const FrontEnd = () => {
  return (
    <div className="frontMain">
     
          <Link to={"/Html"} className="frontLink">Html</Link>
          <Link to={"/Css"} className="frontLink">Css</Link>
          <Link to={"/Bootstrap"} className="frontLink">Bootstrap</Link>
          <Link to={"/Javascript"} className="frontLink">Javascript</Link>
          <Link to={"/Typescript"} className="frontLink">Typescript</Link>
          <Link to={"/Typescript"} className="frontLink">Typescript</Link>
          <Link to={"/Typescript"} className="frontLink">Typescript</Link>
         
          

         
    </div>
  )
}

export default FrontEnd