import NavBar from "../../../components/navbar/NavBar"
import { secStyle } from "../../../components/navbar/style/secStyle"
import { frontLinks } from "../frontRoutes"


const Html = () => {
  return (
    <div>
       <NavBar navLinks={frontLinks} navbarStyle={secStyle}/>  
       <h2>sdfdsfsdfsf</h2>
    </div>
  )
}

export default Html