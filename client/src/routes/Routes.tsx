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
       

      </Routes>
    </div>
   
  )
}

export default AppRoutes