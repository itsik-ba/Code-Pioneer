import "./style/explainStyle.scss"

type explainProp = {
    title: string,
    info: string,
    example: string,
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
            <p className="main_par">{exp.example}</p>
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