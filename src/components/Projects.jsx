import './Projects.css';
import SectionName from './SectionName';
import Project from './Project';
import data from '../data/data';
import { FilterButtonsList } from './FilterButtonsList';
import { useState } from 'react';

function Projects() {
  const allCategories = [
    'All',
    ...new Set(data.map((project) => project.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [projects, setProjects] = useState(data);
  const [activeButton, setActiveButton] = useState('All');

  const filterCategory = (category) => {
    if (category === 'All') {
      setProjects(data);
      setActiveButton('All');
      return;
    }

    const filteredData = data.filter(
      (project) => project.category === category
    );

    setActiveButton(category);

    setProjects(filteredData);
  };

  return (
    <section className="projects" id="projects">
      {/* <SectionName title={'Proyectos'} number={'2'} /> */}

      <p className="subTitle">Échale un vistazo a mis</p>
      <h3 className="titleSection" style={{ marginBottom: '2.5rem' }}>
        Últimos <span className="outline">Trabajos</span>
      </h3>

      <FilterButtonsList
        categories={categories}
        filterCategory={filterCategory}
        activeButton={activeButton}
      />

      <Project projects={projects} />
    </section>
  );
}

export default Projects;
