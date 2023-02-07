import './About.css';
import miFoto from '../assets/img/yo.png';
import { BsDownload } from 'react-icons/bs';
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            corrupti expedita quibusdam natus provident, a illo quas amet atque
            sint iste, quis reprehenderit consequatur voluptate error tempore.
            <br />
            <br />
            Vitae, velit veritatis? Sit, doloremque nulla! Doloremque numquam
            tempora quae id? Officiis, modi repellendus! Dolor sit amet
            consectetur adipisicing elit. Harum, corrupti expedita quibusdam
            natus provident, a illo quas amet atque sint iste, quis
            reprehenderit consequatur voluptate error tempore
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
