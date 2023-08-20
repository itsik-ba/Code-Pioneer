import { Link } from "react-router-dom"
import "./style/frontend.scss"

type navigationFront = {
  link :string,
  className:string,
  name:string,
}

type navProps = {
  frontEnd:navigationFront[];
}

const FrontEnd: React.FC<navProps> = ({frontEnd}) => {
  return (
    <>
   <div className="mainFrontEnd">
      {frontEnd.map((front, index) => (
          <Link to={front.link} className={front.className} key={index}>
            {front.name}
          </Link>
        ))}
   </div>

   <main className="sidebar">
<div className="sidebar__mainlinks">


</div>

<div className="mainc">
  <h2 className="maincl">this is mainBlock</h2>
</div>

</main>
    </>
  );
}

export default FrontEnd