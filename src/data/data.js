import projectImage1 from '../assets/img/portada-mrmonkey.png';
import projectImageMobile1 from '../assets/img/portada-mrmonkey-mobile.png';

import projectImage2 from '../assets/img/portada-katiuska.png';
import projectImageMobile2 from '../assets/img/portada-katiuska-mobile.png';

import projectImage3 from '../assets/img/portada-octopus.png';
import projectImageMobile3 from '../assets/img/portada-octopus-mobile.png';

import projectImage4 from '../assets/img/portada-stier.png';
import projectImageMobile4 from '../assets/img/portada-stier-mobile.png';

const data = [
  {
    id: 1,
    image: projectImage1,
    imageMobile: projectImageMobile1,
    type: 'Diseño para Redes Sociales',
    typeColor: '#f7ba00',
    typeColorFont: '#000',
    title: 'Mr. Monkey',
    category: 'Diseño Gráfico',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tools: ['Photoshop'],
    icons: [
      {
        iconName: 'Behance',
        link: 'https://www.behance.net/gallery/163976299/Social-Media-Fast-Food',
      },
    ],
    toolsIcons: [
      {
        iconName: 'Photoshop',
      },
    ],
  },
  {
    id: 2,
    image: projectImage2,
    imageMobile: projectImageMobile2,
    type: 'Diseño para Redes Sociales',
    typeColor: '#ff0e81',
    typeColorFont: '#fff',
    title: 'Katiuska Villamizar',
    category: 'Diseño Gráfico',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tools: ['Photoshop'],
    icons: [
      {
        iconName: 'Behance',
        link: 'https://www.behance.net/gallery/163428939/Social-Media-Beauty-Artist',
      },
    ],
    toolsIcons: [
      {
        iconName: 'Photoshop',
      },
    ],
  },
  {
    id: 3,
    image: projectImage3,
    imageMobile: projectImageMobile3,
    type: 'Diseño para Redes Sociales',
    typeColor: '#9e0404',
    typeColorFont: '#fff',
    title: 'Octopus English Course',
    category: 'Diseño Gráfico',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tools: ['Photoshop', 'Illustrator'],
    icons: [
      {
        iconName: 'Behance',
        link: 'https://www.behance.net/gallery/164025573/Social-Media-English-Course',
      },
    ],
    toolsIcons: [
      {
        iconName: 'Photoshop',
      },
      {
        iconName: 'Illustrator',
      },
    ],
  },
  {
    id: 4,
    image: projectImage4,
    imageMobile: projectImageMobile4,
    type: 'Desarrollo Web',
    typeColor: '#178530',
    typeColorFont: '#fff',
    title: 'Sistema Stier',
    category: 'Web',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tools: ['JavaScript', 'PHP', 'SQL'],
    icons: [
      {
        iconName: 'Github',
        link: 'https://www.behance.net/sandymarrone',
      },
    ],
    toolsIcons: [
      {
        iconName: 'JavaScript',
      },
      {
        iconName: 'Php',
      },
      {
        iconName: 'Sql',
      },
    ],
  },
];

export default data;
