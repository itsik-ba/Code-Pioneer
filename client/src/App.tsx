
// component

import NavBar from "./components/navbar/NavBar";
import { navLinks } from "./components/navbar/navRoutes";
// 
// style 
import "./index.scss";
import { mainStyle } from "./components/navbar/style/mainStyle";
import AppRoutes from "./routes/Routes";
// 

function App() {
   return (
    <>
    <NavBar navLinks={navLinks}
        navbarStyle={mainStyle}/>

    <section>
    < AppRoutes />
 
    </section>
       </>
      )
}
export default App


