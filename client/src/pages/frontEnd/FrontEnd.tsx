

import NavBar from "../../components/navbar/NavBar";
import { secStyle } from "../../components/navbar/style/secStyle";
import { frontLinks } from "./frontRoutes";


const FrontEnd = () => {
  return (
    <div 
    className="frontMain">
        <NavBar navLinks={frontLinks} navbarStyle={secStyle}/>
        
    </div>
  )
}

export default FrontEnd