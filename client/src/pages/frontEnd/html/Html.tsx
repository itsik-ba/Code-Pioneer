import "./style/html.scss";
import InfoProp from "../../../components/infoComp/InfoProp";
import NavBar from "../../../components/navbar/NavBar";
import { secStyle } from "../../../components/navbar/style/secStyle";
import { sideStyle } from "../../../components/navbar/style/sideStyle";
import { frontLinks } from "../frontRoutes";
import { htmlLinks } from "./htmlRoutes";
import { htmlInfo } from "./htmlInfo";

const Html = () => {
  return (
    <section>
      <NavBar navLinks={frontLinks} navbarStyle={secStyle} />

      <div className="container">
        <NavBar navLinks={htmlLinks} navbarStyle={sideStyle} />
        
        <div className="info">
        <InfoProp infoarr={htmlInfo} />
        </div>
      
      </div>
      </section>
  );
};

export default Html;
