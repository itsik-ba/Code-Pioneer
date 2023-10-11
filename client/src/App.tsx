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

// 

function App() {
   return (
   
     <div className="mainDiv">
       <NavBar navLinks={navLinks}
        navbarStyle={mainStyle}/>
      
       <Routes>
        <Route path="/frontend" element={<FrontEnd />}/>
        <Route path="/html" element={<Html />}/>
       </Routes>
     
       </div>
      )
}
export default App


