import "./style/sexplain.scss";

type secExpProp = {
  header?: string,
  underHeader?: string,
  explain?:string,
  headerTwo?:string,
  underHeaderTwo?:string,
  explainTwo?:string,
  explainImage?:string,
  imageExplain?:string,
}

type secExpArray ={
    explain:secExpProp[]
}

const SExplain: React.FC<secExpArray> = ({explain}) => {
  return (
<>
    {explain.map((secExp, index) => (
<section className="SeContainer" key={index}>
     <div className="SefirstCard">
        <h1 className="SefirstCard_Sefirsth1">{secExp.header}</h1>
        <h2 className="SefirstCard_Sefirsth2">{secExp.underHeader}</h2>
        <div className="SefirstCard_firstdiv">
          <p className="SefirstCard_Sefirstpar1">{secExp.explain}</p>
        </div>
      </div>
      <hr className="SefirstCard_Sefirsth1"/>

      <div className="SesecondCard">
        <h1>{secExp.headerTwo}</h1>
        <h2>{secExp.underHeaderTwo}</h2>
        <div>
          <p>{secExp.explainTwo}</p>
          <div>
            <img src={secExp.explainImage?.toString()} alt="explain-image" />
          </div>
          <p>{secExp.imageExplain}</p>
          <hr />
        </div>
      </div>
</section>
    ))}

</>



  )
}

export default SExplain