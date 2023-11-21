import Explain from "../../../../components/infoComp/Explain"
import NavBar from "../../../../components/navbar/NavBar"
import { secStyle } from "../../../../components/navbar/style/secStyle"
import { sideStyle } from "../../../../components/navbar/style/sideStyle"
import { frontLinks } from "../../frontRoutes"
import { htmlLinks } from "../htmlRoutes"
import { elementsInfo } from "../layouts/htmlInfo"


const Elements = () => {
  return (
    <section>
     <NavBar navLinks={frontLinks} navbarStyle={secStyle} />
        
     <div className="container">
        <NavBar navLinks={htmlLinks} navbarStyle={sideStyle} />
       
         
        <div className="info">
        <Explain explain={elementsInfo} />
        </div>
        
      </div>   

    </section>
  )
}

export default Elements