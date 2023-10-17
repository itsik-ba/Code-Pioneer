import "./style/infosStyle.scss";

type infoProp = {
   header:string,
   image:string,
   explain:string,
}

type infoArray = {
  infoarr:infoProp[];
}


const MainInfo: React.FC<infoArray> = ({infoarr}) => {
  return (
    <>
   
       {infoarr.map((info, index) => (
        <section key={index} className="section">
        <div className="title" >
        <h2 className="title_head">{info.header}</h2>
        </div>
        <div className="image">
         <img src={info.image} alt="" className="image_img" />
        </div>
      <div className="explain">
      <p className="explain_exp">{info.explain}</p>
     </div>
     </section>
     ))}

    </>
    
  );
};

export default MainInfo;
