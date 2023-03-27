import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import Logo from '../assets/img/logo-samcreative.svg';
import Logoletras from '../assets/img/letras-samcreative.svg';
import { BsWhatsapp, BsList, BsX } from 'react-icons/bs';

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

  return (
    <nav
      className={`navbar ${
        ubicacionNav ? 'navbar--hide' : navbar ? 'navbar--active' : ''
      }`}
    >
      <a
        style={{
          lineHeight: '0px',
        }}
        href="#"
      >
        <img className="navbar__logo" src={Logo} alt="Logo Sandy Marrone" />
      </a>

      <ul className={`navbar__menu menu ${active ? 'menu__active' : ''}`}>
        <button className="menu__close close" onClick={toggleMenu}>
          <BsX className="close__icon" />
        </button>
        <img className="menu__logo" src={Logoletras} alt="Logo Sandy Marrone" />
        <li className="navbar__item">
          <a className="navbar__link" href="#about" onClick={toggleMenu}>
            Sobre mi
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#projects" onClick={toggleMenu}>
            Proyectos
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#contact" onClick={toggleMenu}>
            Contacto
          </a>
        </li>
      </ul>

      <button className="navbar__navBtn">
        <BsWhatsapp className="navBtn__icon" /> Hablemos
      </button>

      <button className="navbar__menuBtn" onClick={toggleMenu}>
        <BsList />
      </button>
    </nav>
  );
}

export default Navbar;
