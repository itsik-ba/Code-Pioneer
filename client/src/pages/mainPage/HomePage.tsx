import "../../components/infoComp/style/explainStyle.scss"
import NavBar from "../../components/navbar/NavBar"
import { secStyle } from "../../components/navbar/style/secStyle"
import { homeRoutes } from "./homeRoutes"


const HomePage = () => {
  return (
    <section>
         <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />
       
      
        
    </section>
  )
}

export default HomePage