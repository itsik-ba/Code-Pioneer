import { Link } from "react-router-dom";
import "../style/sideBar.scss"
import FrontEnd from "../FrontEnd"



const Html = () => {
  const htmlS = [
  {name:"info", to:"/info"},
  {name:"attributes", to:"/attributes"},
  {name:"header", to:"/header"},
  {name:"paragraph",
   to:"/paragraph"},
  {name:"style",
   to:"/style"},
  {name:"colors",
   to:"/colors"},
  {name:"links"},
  {name:"images"},
  {name:"table"},
  {name:"list"},
  {name:"class"},
  {name:"id"},
  {name:"responsive"},
]

 return (
  
    <div className="htmlMain">
    <FrontEnd/>
      <main className="myLinks">
     {htmlS.map((ht, index) => (
     <Link key={index} to={`${ht.to}`} className="sideLinks">{ht.name}</Link>
     ))}

      </main>
</div>
  
  )
}

export default Html