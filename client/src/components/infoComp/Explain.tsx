import "./style/explainStyle.scss"

type explainProp = {
    title: string,
    info: string,
    headexap:string,
    example: string,
    headexap2?:string,
    example2?: string
    headexap3?:string,
    example3?: string
  
    }

type explainArray = {
    explain:explainProp[];
}

const Explain: React.FC<explainArray> = ({explain}) => {

  return (
    <div className="wrapper">
    {explain.map((exp, index) => (
      <section key={index} className="section">
        <h1 className="section_title">{exp.title}</h1>
        <p className="section_info">{exp.info}</p>

        <div className="main">
          <h2 className="main_exp">The Explain</h2>
          <div className="main_under">
            <p className="main_par"><span className="main_span">{exp.headexap}</span>{exp.example}</p>
            <p className="main_par"><span className="main_span">{exp.headexap2}</span>{exp.example2}</p>
            <p className="main_par"><span className="main_span">{exp.headexap3}</span>{exp.example3}</p>
           
          </div>

          <div className="main_btn">
            <button className="main_btn_tmbtn"> More</button>
          </div>
        </div>
      </section>
    ))}
  </div>
  )
}

export default Explain