import './Project.css';
import { useState } from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaPhp } from 'react-icons/fa';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
import ProjectInfo from './ProjectInfo';

function ProyectoIndividual({ projects }) {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const mostrarComponenteHandler = () => {
    setMostrarComponente(true);
  };

  const cerrarComponenteHandler = () => {
    setMostrarComponente(false);
  };

  return (
    <ul className="projects__grid">
      {/* <TransitionGroup> */}
      {mostrarComponente && (
        // <CSSTransition classNames="fade" timeout={600}>
        <ProjectInfo onClose={cerrarComponenteHandler} />
        // </CSSTransition>
      )}
      {/* </TransitionGroup> */}
      {projects.map((project) => (
        <SwitchTransition>
          <CSSTransition
            key={project.id}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <li className="project" key={project.id}>
              <picture className="project__background">
                <source
                  srcSet={`${project.imageMobile}`}
                  media="(max-width: 576px)"
                />
                <img src={`${project.image}`} alt="Imagen de proyecto" />
              </picture>
              <div className="project__blur--hover"></div>
              <div className="project__info">
                <span
                  className="project__type"
                  style={{
                    backgroundColor: `${project.typeColor}`,
                    color: `${project.typeColorFont}`,
                  }}
                >
                  {project.type}
                </span>
                <h5 className="project__title">{project.title}</h5>
                <p className="project__textInfo">{project.description}</p>
                <ul className="project__tools tools">
                  {project.toolsIcons.map((item) => {
                    const IconTool = ({ icon }) => {
                      switch (icon) {
                        case 'JavaScript':
                          return (
                            <IoLogoJavascript
                              color="var(--gray)"
                              size="1.2rem"
                              className="project__link"
                            />
                          );
                        case 'Php':
                          return (
                            <FaPhp
                              color="var(--gray) !important"
                              size="1.2rem"
                              className="project__link"
                            />
                          );
                        case 'Sql':
                          return (
                            <AiOutlineConsoleSql
                              color=""
                              size="1.2rem"
                              className="project__link"
                            />
                          );
                        case 'Photoshop':
                          return (
                            <DiPhotoshop
                              color="var(--gray)"
                              size="1.2rem"
                              className="project__link"
                            />
                          );
                        case 'Illustrator':
                          return (
                            <DiIllustrator
                              color="var(--gray)"
                              size="1.2rem"
                              className="project__link"
                            />
                          );
                        default:
                          return null;
                      }
                    };

                    return (
                      <li className="tools__tool tool" key={item.iconName}>
                        <IconTool icon={item.iconName} />
                        <span className="tool__name">{item.iconName}</span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="whiteButton"
                  onClick={mostrarComponenteHandler}
                >
                  Más información
                </button>
              </div>
              <img
                className="project__element"
                src={`../src/assets/img/${project.element}`}
                alt=""
              />
            </li>
          </CSSTransition>
        </SwitchTransition>
      ))}
    </ul>
  );
}

export default ProyectoIndividual;
