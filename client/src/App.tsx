import "./index.css";
import { Route, Routes } from "react-router-dom";

// All Bars *****************
import NavBar from "./components/NavBar";
import { navBarMain} from "./components/Routes";
import { navFrontEnd, navFrontEndHtml } from "./pages/frontEnd/routes/FrontRoutes";
import FrontEnd from "./pages/frontEnd/FrontEnd";
import Html from "./pages/frontEnd/html/Html";



function App() {
   return (
     <div>
      <NavBar navbar={navBarMain}/>
        <Routes>
          <Route path="/FrontEnd"  element={<FrontEnd frontEnd={navFrontEnd}/>}/>
          <Route path="/html" element={<FrontEnd frontEnd={navFrontEnd}/>} />
        
           
        </Routes>
       
</div>
      
  )
}

export default App
