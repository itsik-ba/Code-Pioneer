
type InfoStyle = {
  infoStyle: React.CSSProperties;
};

const MainInfo: React.FC<InfoStyle> = ({ }) => {
  return (
    <div className="m_info" style={{display:"flex", justifyContent:"center",width:"100%"}}>
      <h1> MainInfo</h1>
    </div>
  );
};

export default MainInfo;
