import { Route, Routes } from "react-router-dom";

// component

import NavBar from "./components/navbar/NavBar";

// 
// style 
import "./index.css";
import { mainStyle } from "./components/navbar/style/mainStyle";
// 

// routes
import { navLinks } from "./components/navbar/navRoutes";
import FrontEnd from "./pages/frontEnd/FrontEnd";
import Html from "./pages/frontEnd/html/Html";
import HomePage from "./pages/mainPage/HomePage";
import About from "./pages/mainPage/about/About";
import Contact from "./pages/mainPage/contact/Contact";
import Login from "./pages/mainPage/login/Login";

// 

function App() {
   return (
    <>
    <NavBar navLinks={navLinks}
        navbarStyle={mainStyle}/>

    <section>
     <Routes>
       
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/frontend" element={<FrontEnd />}/>
        <Route path="/html" element={<Html />}/>
       </Routes>
 
</section>
       </>
      )
}
export default App


