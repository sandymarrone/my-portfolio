import './Project.css';

function ProyectoIndividual(props) {
  return (
    <li className="project" style={{ backgroundImage: `url(${props.srcImg})` }}>
      <div className="project__info">
        <span className="project__type">{props.type}</span>
        <h5 className="project__title">{props.name}</h5>
        <p className="project__textInfo">{props.info}</p>
        <span className="project__toolsTitle">Herramientas</span>
        <ul className="project__tools tools">
          <li className="tools__tool">{props.tools[0]}</li>
          <li className="tools__tool">{props.tools[1]}</li>
          <li className="tools__tool">{props.tools[2]}</li>
        </ul>
        <div className="project__links">
          <a href={props.href[0]} target="_blank" rel="noopener noreferrer">
            {props.icon[0]}
          </a>
          <a href={props.href[1]} target="_blank" rel="noopener noreferrer">
            {props.icon[1]}
          </a>
          <a href={props.href[2]} target="_blank" rel="noopener noreferrer">
            {props.icon[2]}
          </a>
        </div>
      </div>
      <img className="project__element" src={props.element} alt="" />
    </li>
  );
}

export default ProyectoIndividual;
