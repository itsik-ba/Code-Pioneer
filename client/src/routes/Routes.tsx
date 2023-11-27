import { Route, Routes } from "react-router-dom";

// homePage
import HomePage from "../pages/mainPage/HomePage";
import About from "../pages/mainPage/about/About";
import Contact from "../pages/mainPage/contact/Contact";
import Login from "../pages/mainPage/login/Login";

// frontPage
import FrontEnd from "../pages/frontEnd/FrontEnd";

// html
import Html from "../pages/frontEnd/html/Html";
import Elements from "../pages/frontEnd/html/htmlPages/Elements";
import Attributes from "../pages/frontEnd/html/htmlPages/Attributes";



const AppRoutes = () => {
  return (
    <div>
 <Routes>

       {/* homePage */}
       <Route path="/" element={<HomePage/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/login" element={<Login/>}/>


        {/* front */}
       <Route path="/frontend" element={<FrontEnd />}/>

       {/* html */}
       <Route path="/html" element={<Html />}/>
       <Route path="/html/elements" element={<Elements />}/>
       <Route path="/html/attributes" element={<Attributes />}/>
    

  </Routes>
    </div>
   
  )
}

export default AppRoutes