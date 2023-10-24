import "../../components/infoComp/style/explainStyle.scss"
import Explain from "../../components/infoComp/Explain"
import NavBar from "../../components/navbar/NavBar"
import { secStyle } from "../../components/navbar/style/secStyle"
import { homePage } from "./homeLayout"
import { homeRoutes } from "./homeRoutes"

const HomePage = () => {
  return (
    <section>
         <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />
       
       <Explain explain={homePage} />
        
    </section>
  )
}

export default HomePage