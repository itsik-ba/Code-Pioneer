import { htmlStyle } from "./style/htmlStyle"
import NavBar from "../../../components/navbar/NavBar"
import { secStyle } from "../../../components/navbar/style/secStyle"
import { sideStyle } from "../../../components/navbar/style/sideStyle"
import { frontLinks } from "../frontRoutes"
import { htmlLinks } from "./htmlRoutes"




const Html = () => {
  return (
    <>
    <NavBar navLinks={frontLinks} navbarStyle={secStyle}/>  

    <div style={htmlStyle}>
     <NavBar navLinks={htmlLinks} navbarStyle={sideStyle}/>  
      <h2>2222222</h2>
    </div>
    </>
  )
}

export default Html