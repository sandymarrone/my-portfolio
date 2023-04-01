import './About.css';
import miFoto from '../assets/img/yo.png';
import { MdDownload } from 'react-icons/md';
import SectionName from './SectionName';

function About() {
  return (
    <section className="about" id="about">
      <SectionName title={'Sobre mi'} number={'1'} />
      <div className="about__container">
        <div className="about__img">
          <img src={miFoto} alt="" />
        </div>
        <div className="about__info">
          <p className="subTitle" style={{ textAlign: 'start' }}>
            ¡Hola! Me llamo
          </p>
          <h2 className="titleSection" style={{ textAlign: 'start' }}>
            Sandy <span className="outline">Marrone</span>
          </h2>

          <p>
            Soy diseñador gráfico freelancer desde 2017 y desarrollador de
            aplicaciones web desde 2020, con experiencia en la creación de
            soluciones innovadoras y atractivas para la web y la publicidad.
          </p>

          <p>
            En búsqueda de unir mi pasión por la tecnología y el arte para
            ayudar a las empresas a alcanzar sus objetivos de negocio.
          </p>

          <button className="primaryButton">
            <MdDownload className="generalIcon" /> Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
