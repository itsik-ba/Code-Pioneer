import "./style/infosStyle.scss"
import myImage from "./test.jpeg"

type infoProp = {

}



const MainInfo: React.FC<infoProp> = ({}) => {
  return (
    <section>
      <div className="title" >
        <h2 className="title_head">title</h2>
        </div>
        <div className="image">
         <img src={myImage} alt="" className="image_img" />
        </div>
      <div className="explain">
      <p className="explain_exp">sdfsaf</p>
     </div>
    </section>
  );
};

export default MainInfo;
