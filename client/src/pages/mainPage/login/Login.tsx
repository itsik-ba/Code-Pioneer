import NavBar from "../../../components/navbar/NavBar"
import { secStyle } from "../../../components/navbar/style/secStyle"
import { homeRoutes } from "../homeRoutes"

const Login = () => {
  return (
    <section>
    <NavBar navLinks={homeRoutes} navbarStyle={secStyle} />

  <div className="login">
  <h1>login</h1>
  <h1>login</h1>
  <h1>login</h1>
  </div>
   
</section>
  )
}

export default Login