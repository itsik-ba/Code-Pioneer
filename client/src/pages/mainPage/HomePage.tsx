import NavBar from "../../components/navbar/NavBar"
import { secStyle } from "../../components/navbar/style/secStyle"
import { homeRoutes } from "./homeRoutes"

const HomePage = () => {
  return (
    <section>
         <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />
       <div className="homePage">

       </div>
        
    </section>
  )
}

export default HomePage