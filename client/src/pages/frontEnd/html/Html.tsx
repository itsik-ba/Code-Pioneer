import InfoProp from "../../../components/infoComp/InfoProp";
import { infoStyle } from "../../../components/infoComp/style/infoStyle";
import NavBar from "../../../components/navbar/NavBar";
import { secStyle } from "../../../components/navbar/style/secStyle";
import { sideStyle } from "../../../components/navbar/style/sideStyle";
import { frontLinks } from "../frontRoutes";
import { htmlLinks } from "./htmlRoutes";

const Html = () => {
  return (
    <>
      <NavBar navLinks={frontLinks} navbarStyle={secStyle} />

      <div style={{
        display:"flex",
        width: "100%",
      }}>
        <NavBar navLinks={htmlLinks} navbarStyle={sideStyle} />
       <InfoProp infoStyle={infoStyle} />
      </div>
    </>
  );
};

export default Html;
