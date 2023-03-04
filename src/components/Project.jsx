import './Project.css';
import { RiExternalLinkLine } from 'react-icons/ri';
import { BsGithub, BsBehance } from 'react-icons/bs';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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
              style={{
                backgroundImage: `url(../src/assets/img/${project.image})`,
              }}
            >
              <div className="project__info">
                <span
                  className="project__type"
                  style={{ backgroundColor: `${project.typeColor}` }}
                >
                  {project.type}
                </span>
                <h5 className="project__title">{project.title}</h5>
                <p className="project__textInfo">{project.description}</p>
                <span
                  className="project__toolsTitle"
                  style={{ borderBottom: `solid 2px ${project.typeColor}` }}
                >
                  Herramientas
                </span>
                <ul className="project__tools tools">
                  {/* {project.tools.map((tool) => {
                    return (
                      <li className="tools__tool" key={tool}>
                        {tool}
                      </li>
                    );
                  })} */}
                  <li className="tools__tool">{project.tools.join(' · ')}</li>
                </ul>
                <div className="project__links">
                  {project.icons.map((item) => {
                    // Switch para devolver el nombre del icono correctamente (si lo sacaba directamente del JSON, no me saba error porque me lo traía lowercase)
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
                </div>
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
