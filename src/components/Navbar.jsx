import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import Logo from '../assets/img/logo-samcreative.svg';
import Logoletras from '../assets/img/letras-samcreative.svg';
import { BsWhatsapp, BsList, BsX } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Navbar() {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [ubicacionNav, setUbicacionNav] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  let lastScrollY = window.scrollY;

  const activeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    if (window.scrollY >= lastScrollY) {
      setUbicacionNav(true);
    } else {
      setUbicacionNav(false);
    }

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', activeNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', activeNavbar);
      };
    }
  }, [lastScrollY]);

  const navAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        ease: 'easeOut',
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: '-20px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // ease: 'easeOut',
        // delay: 1,
      },
    },
  };

  const navButton = {
    hidden: { opacity: 0, y: '-10px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        delay: 1.2,
        duration: 0.2,
      },
    },
  };

  const navLogo = {
    hidden: { opacity: 0, y: '-10px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.2,
        duration: 0.2,
      },
    },
  };

  const navResponsiveButton = {
    hidden: { opacity: 0, y: '-10px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.5,
        duration: 0.2,
      },
    },
  };

  return (
    <nav
      className={`navbar ${
        ubicacionNav ? 'navbar--hide' : navbar ? 'navbar--active' : ''
      }`}
    >
      <motion.a
        style={{
          lineHeight: '0px',
        }}
        href="#"
        variants={navLogo}
        initial="hidden"
        animate="show"
      >
        <img className="navbar__logo" src={Logo} alt="Logo Sandy Marrone" />
      </motion.a>

      <motion.ul
        className={`navbar__menu menu ${active ? 'menu__active' : ''}`}
        variants={navAnimation}
        initial="hidden"
        animate="show"
      >
        <button className="menu__close close" onClick={toggleMenu}>
          <BsX className="close__icon" />
        </button>
        <a
          style={{
            lineHeight: '0px',
          }}
          href="#"
          className="container__menuLogo"
          onClick={toggleMenu}
        >
          <img
            className="menu__logo"
            src={Logoletras}
            alt="Logo Sandy Marrone"
          />
        </a>
        <motion.li className="navbar__item" variants={navItem}>
          <a className="navbar__link" href="#about" onClick={toggleMenu}>
            Sobre mi
          </a>
        </motion.li>
        <motion.li className="navbar__item" variants={navItem}>
          <a className="navbar__link" href="#projects" onClick={toggleMenu}>
            Proyectos
          </a>
        </motion.li>
        <motion.li className="navbar__item" variants={navItem}>
          <a className="navbar__link" href="#contact" onClick={toggleMenu}>
            Contacto
          </a>
        </motion.li>
      </motion.ul>

      <motion.button
        className="navbar__navBtn"
        variants={navButton}
        initial="hidden"
        animate="show"
      >
        <BsWhatsapp className="navBtn__icon" /> Hablemos
      </motion.button>

      <motion.button
        className="navbar__menuBtn"
        onClick={toggleMenu}
        variants={navResponsiveButton}
        initial="hidden"
        animate="show"
      >
        <BsList className="navbar__responsiveMenuIcon" />
      </motion.button>
    </nav>
  );
}

export default Navbar;
