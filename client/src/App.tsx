import "./index.css";
import { Route, Routes } from "react-router-dom";

// All Bars *****************
import TopBar from './components/topBar/TopBar';
import FrontEnd from "./pages/frontEnd/FrontEnd";
import Html from "./pages/frontEnd/html/Html";
import Info from "./pages/frontEnd/html/sideBarLinks/Info";


function App() {
   
  return (
     <div>
        <TopBar />
      
        <Routes>

          {/* main */}
          <Route path="FrontEnd" element={<FrontEnd />} />

          {/* html */}
          <Route path="Html" element={<Html />} />
          <Route path="Info" element={<Info />} />
       
        </Routes>
       
       
       
      </div>
      
  )
}

export default App
