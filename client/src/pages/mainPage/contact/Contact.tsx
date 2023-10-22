import NavBar from "../../../components/navbar/NavBar"
import { secStyle } from "../../../components/navbar/style/secStyle"
import { homeRoutes } from "../homeRoutes"


const Contact = () => {
  return (
    <section>
    <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />

  <div className="contact">
  <h1>Contact</h1>
  <h1>Contact</h1>
  <h1>Contact</h1>
  
  </div>
   
</section>
  )
}

export default Contact