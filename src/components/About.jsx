import './About.css';
import miFoto from '../assets/img/foto-sandy-marrone-about.webp';
import venezuelaFlag from '../assets/img/venezuela-flag.svg';
import { MdDownload } from 'react-icons/md';
import SectionName from './SectionName';

function About() {
  return (
    <section className="about" id="about">
      {/* <SectionName title={'Sobre mi'} number={'1'} /> */}
      <div className="about__container">
        <div className="about__img">
          <img src={miFoto} alt="" />
        </div>
        <div className="about__info">
          <p className="subTitle" style={{ textAlign: 'start' }}>
            <img
              className="subTitle__icon"
              src={venezuelaFlag}
              alt="Bandera de Venezuela"
            />{' '}
            Venezolano de 22 años.
          </p>
          <h2 className="titleSection" style={{ textAlign: 'start' }}>
            Ingeniero Informático y Diseñador Gráfico autodidacta.
          </h2>

          <div className="paragraphContainer">
            <p>
              Soy diseñador gráfico freelancer desde 2017 y desarrollador de
              aplicaciones web desde 2020, con experiencia en la creación de
              soluciones innovadoras y atractivas para la web y la publicidad.
            </p>

            <p>
              En búsqueda de unir mi pasión por la tecnología y el arte para
              ayudar a las empresas a alcanzar sus objetivos de negocio.
            </p>
          </div>

          <button className="primaryButton">
            <MdDownload className="generalIcon" /> Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
