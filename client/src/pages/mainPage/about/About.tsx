import NavBar from "../../../components/navbar/NavBar"
import { secStyle } from "../../../components/navbar/style/secStyle"
import { homeRoutes } from "../homeRoutes"


const About = () => {
  return (
    <section>
    <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />

  <div className="about">
  <h1>about</h1>
  <h1>about</h1>
  <h1>about</h1>
  </div>
   
</section>
  )
}

export default About