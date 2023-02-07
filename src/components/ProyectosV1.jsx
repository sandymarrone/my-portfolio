import './Proyectos.css';
import SectionTitle from './SectionTitle';
import { BsStars } from 'react-icons/bs';
import ProyectoIndividual from './ProyectoIndividual';

function Proyectos() {
  return (
    <section className="section-proyectos" id="proyectos">
      <SectionTitle name={'Proyectos'} number={'2'} />
      <div className="containerButtons">
        <button className="btnFiltroProyectos active">
          <BsStars style={{ position: 'relative', top: '1px' }} /> Destacados
        </button>
        <button className="btnFiltroProyectos">Web</button>
        <button className="btnFiltroProyectos">Diseño Gráfico</button>
      </div>

      <ul className="containerGridProjects">
        <ProyectoIndividual
          type={'Web'}
          name={'Proyecto 1'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ProyectoIndividual
          type={'Diseño para Redes Sociales'}
          name={'Proyecto 2'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ProyectoIndividual
          type={'Web'}
          name={'Proyecto 3'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ProyectoIndividual
          type={'Branding'}
          name={'Proyecto 4'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ProyectoIndividual
          type={'Diseño de Logo'}
          name={'Proyecto 5'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ProyectoIndividual
          type={'Web'}
          name={'Proyecto 6'}
          info={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </ul>
    </section>
  );
}

export default Proyectos;
