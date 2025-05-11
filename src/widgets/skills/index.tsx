import "./styles.css";

export const Skills = () => {
  return (
    <div className="mac-card">
      <div className="mac-topnav">
        <div className="buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="maximize"></div>
        </div>
        <p className="mac-title">My Skills</p>
      </div>
      <div className="mac-content">
        <span className="badge">Typescript</span>
        <span className="badge">JavaScript</span>
        <span className="badge">Python</span>
        <span className="badge">Shell</span>
        <span className="badge">Docker</span>
        <span className="badge">Kubernetes</span>
        <span className="badge">Ansible</span>
        <span className="badge">Jenkins</span>
        <span className="badge">AWS</span>
        <span className="badge">GCP</span>
      </div>
    </div>
  );
};
