import './ProjectInfo.css';
import { BsX } from 'react-icons/bs';
import projectImage2 from '../assets/img/portada-katiuska.png';
import { BsBehance } from 'react-icons/bs';
import { DiPhotoshop } from 'react-icons/di';

export default function ProjectInfo({ onClose }) {
  return (
    <div className="projectInfo">
      <div className="projectInfo__container">
        <button className="closePopUp" onClick={onClose}>
          <BsX className="closePopUp__icon" />
        </button>
        <div className="projectInfo__header">
          <img src={projectImage2} alt="" />
          <div className="projectInfo__info">
            <span
              className="projectInfo__type"
              style={{
                backgroundColor: '#ff0e81',
                color: '#fff',
              }}
            >
              Diseño para Redes Sociales
            </span>
            <h4>Katiuska Villamizar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              esse, quae blanditiis eum repudiandae nihil exercitationem
              quisquam?
            </p>
            <span className="projectInfo__toolsTitle">Herramientas:</span>
            <ul className="projectInfo__tools">
              <li className="projectInfo__tool">
                <DiPhotoshop
                  color="var(--gray)"
                  size="2rem"
                  className="projectInfo__toolIcon"
                />{' '}
                <span>Photoshop</span>
              </li>
            </ul>

            <a
              href="https://www.behance.net/gallery/163428939/Social-Media-Beauty-Artist"
              target="_blank"
              className="projectInfo__link"
            >
              <BsBehance className="projectInfo__linkIcon" />{' '}
              <span>Ver en Behance</span>
            </a>
            {/* <button className="projectInfo__Button">
              <BsBehance className="generalIcon" /> Ver proyecto en Behance
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
