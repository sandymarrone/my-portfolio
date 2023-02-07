import './SectionName.css';

function sectionTitle(props) {
  return (
    <div className="sectionName">
      <div className="sectionName__infoSection infoSection">
        <div className="infoSection__number">
          <span>#{props.number}</span>
        </div>
        <h3 className="infoSection__title">{props.title}</h3>
      </div>
      <div className="infoSection__line"></div>
    </div>
  );
}

export default sectionTitle;
