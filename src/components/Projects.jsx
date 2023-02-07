import './Projects.css';
import SectionName from './SectionName';
import Project from './Project';
import { RiExternalLinkLine } from 'react-icons/ri';
import { BsGithub, BsBehance, BsStars } from 'react-icons/bs';
import ProjectImg1 from '../assets/img/project.png';
import ProjectImg2 from '../assets/img/project2.png';
import Phone from '../assets/img/phone.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionName title={'Proyectos'} number={'2'} />

      <p className="subTitle">Échale un vistazo a mis</p>
      <h3 className="titleSection" style={{ marginBottom: '2.5rem' }}>
        Últimos <span className="outline">Trabajos</span>
      </h3>

      <div className="projects__buttons">
        <button className="primaryButton active">
          <BsStars className="generalIcon" /> Destacados
        </button>
        <button className="primaryButton">Web</button>
        <button className="primaryButton">Diseño Gráfico</button>
      </div>

      <ul className="projects__grid">
        <Project
          type={'Diseño para Redes Sociales'}
          name={'Comida Rápida'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          tools={['Photoshop']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsBehance className="project__link" />,
          ]}
          href={['https://brittanychiang.com/', 'https://www.youtube.com/']}
          srcImg={ProjectImg2}
          element={Phone}
        />
        <Project
          type={'Diseño para Redes Sociales'}
          name={'Comida Rápida'}
          info={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          tools={['Photoshop']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsBehance className="project__link" />,
          ]}
          href={['https://brittanychiang.com/', 'https://www.youtube.com/']}
          srcImg={ProjectImg1}
          element={Phone}
        />
        <Project
          type={'Web'}
          name={'Proyecto 3'}
          info={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          tools={['React', 'PokemonAPI']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsGithub className="project__link" />,
          ]}
          href={['https://brittanychiang.com/', 'https://www.youtube.com/']}
          srcImg={ProjectImg1}
          element={Phone}
        />
        <Project
          type={'Branding'}
          name={'Proyecto 4'}
          info={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          tools={['Photoshop', 'Illustrator']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsBehance className="project__link" />,
          ]}
          href={['https://brittanychiang.com/', 'https://www.youtube.com/']}
          srcImg={ProjectImg1}
          element={Phone}
        />
        <Project
          type={'Diseño de Logo'}
          name={'Proyecto 5'}
          info={'Lorem ipsum dolor sit .'}
          tools={['Illustrator']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsBehance className="project__link" />,
            <BsBehance className="project__link" />,
          ]}
          href={[
            'https://brittanychiang.com/',
            'https://www.youtube.com/',
            'https://brittanychiang.com/',
          ]}
          srcImg={ProjectImg1}
          element={Phone}
        />
        <Project
          type={'Web'}
          name={'Proyecto 6'}
          info={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          tools={['React', 'Styled Components', 'TailWind']}
          icon={[
            <RiExternalLinkLine className="project__link" />,
            <BsGithub className="project__link" />,
          ]}
          href={['https://brittanychiang.com/', 'https://www.youtube.com/']}
          srcImg={ProjectImg1}
          element={Phone}
        />
      </ul>
    </section>
  );
}

export default Projects;
