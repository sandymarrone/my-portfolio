import './Header.css';
// import miFoto from '../assets/img/pp.jpg';
import miFoto from '../assets/img/yo2.png';
import ScrollButton from './ScrollButton';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Header() {
  const img = {
    hidden: { opacity: 0, y: '-30px' },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const typingContainer = {
    hidden: { opacity: 0, y: '-30px' },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeInOut',
        duration: 2.2,
      },
    },
  };

  const typingText = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const title = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  };

  const socialMedia = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, delay: 1.8 },
    },
  };

  const lights = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0 },
    },
  };
  return (
    <header className="header">
      <div className="header__content">
        <motion.img
          className="header__img"
          src={miFoto}
          alt="Foto de Sandy Marrone"
          variants={img}
          initial="hidden"
          animate="show"
        ></motion.img>

        <motion.h4
          className="header__greeting"
          variants={typingContainer}
          initial="hidden"
          animate="show"
        >
          {Array.from('¡Hola!').map((word, i) => (
            <motion.span variants={typingText} key={i}>
              {word}
            </motion.span>
          ))}
        </motion.h4>

        <div className="header__info">
          <motion.div
            className="header__textPresentation"
            variants={title}
            initial="hidden"
            animate="show"
          >
            <h5 className="header__subtitle">Me llamo</h5>
            <h1 className="header__title">Sandy Marrone</h1>
            <p className="header__paragraph">
              Diseñador y Desarrollador Frontend
            </p>
          </motion.div>

          <motion.div
            className="header__socialMedia"
            variants={socialMedia}
            initial="hidden"
            animate="show"
          >
            <h5 className="header__subtitle">Más sobre mi aquí:</h5>
            <div className="header__links">
              <a
                href="https://www.linkedin.com/in/sandymarrone"
                target="_blank"
                className="header__link"
              >
                <FaLinkedinIn /> <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sandymarrone"
                target="_blank"
                className="header__link"
              >
                <BsGithub /> <span>Github</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollButton />

      <motion.div
        className="header__redLight"
        variants={lights}
        initial="hidden"
        animate="show"
      ></motion.div>

      <motion.div
        className="header__whiteLight"
        variants={lights}
        initial="hidden"
        animate="show"
      ></motion.div>
    </header>
  );
}

export default Header;
