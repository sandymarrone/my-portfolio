import './Project.css';
import { RiExternalLinkLine } from 'react-icons/ri';
import { BsGithub, BsBehance } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaPhp } from 'react-icons/fa';
import {
  SiPhp,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { AiOutlineCalendar } from 'react-icons/ai';

function ProyectoIndividual({ projects }) {
  return (
    <ul className="projects__grid">
      {projects.map((project) => (
        <SwitchTransition>
          <CSSTransition
            key={project.id}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <li
              className="project"
              key={project.id}
              // style={{
              //   backgroundImage: `url(../src/assets/img/${project.image})`,
              // }}
            >
              <img
                className="project__background"
                src={`../src/assets/img/${project.image}`}
                alt=""
              />
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
                {/* <span
                  className="project__toolsTitle"
                  style={{ borderBottom: `solid 2px ${project.typeColor}` }}
                >
                  {project.category == 'Diseño Gráfico'
                    ? 'Herramientas'
                    : 'Lenguajes'}
                </span> */}
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
                <button className="whiteButton">Más información</button>
                {/* <div className="project__links">
                  {project.icons.map((item) => {
                    Switch para devolver el nombre del icono correctamente (si lo sacaba directamente del JSON, no me saba error porque me lo traía lowercase)
                    const Icon = ({ icon }) => {
                      switch (icon) {
                        case 'ExternalLink':
                          return (
                            <RiExternalLinkLine className="project__link" />
                          );
                        case 'Behance':
                          return <BsBehance className="project__link" />;
                        case 'Github':
                          return <BsGithub className="project__link" />;
                        default:
                          return null;
                      }
                    };

                    return (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.iconName}
                      >
                        <Icon icon={item.iconName} />
                      </a>
                    );
                  })}
                </div> */}
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
