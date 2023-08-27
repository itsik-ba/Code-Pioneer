import { Routes, Route } from "react-router-dom"
import FrontEnd from "../FrontEnd"
import { navFrontEnd, navFrontEndHtml } from "../routes/FrontRoutes"


const Html = () => {
  return (
    <div>
      <Routes>
          <Route path="/FrontEnd" element={<FrontEnd frontEnd={navFrontEnd}/>}/>
          <Route path="/html" element={<FrontEnd frontEnd={navFrontEndHtml}/>}/>

        </Routes>
       
    </div>
  )
}

export default Html


