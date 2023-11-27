
import SExplain from "../../../../components/infoComp/SExplain"
import NavBar from "../../../../components/navbar/NavBar"
import { secStyle } from "../../../../components/navbar/style/secStyle"
import { sideStyle } from "../../../../components/navbar/style/sideStyle"
import { frontLinks } from "../../frontRoutes"
import { htmlLinks } from "../htmlRoutes"
import { attributesInfo } from "../layouts/htmlInfo"



const Attributes = () => {
  return (
    <section>
    <NavBar navLinks={frontLinks} navbarStyle={secStyle} />
       
    <div className="container">
       <NavBar navLinks={htmlLinks} navbarStyle={sideStyle} />
      
        
       <div className="info">
           <SExplain explain={attributesInfo} />
       </div>
       
     </div>   
</section>
  )
}

export default Attributes