import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import Logo from '../assets/img/logo.png';
import { BsMoon } from 'react-icons/bs';
// import { IoMoonOutline } from 'react-icons/md';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [ubicacionNav, setUbicacionNav] = useState(false);

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
      <img className="navbar__logo" src={Logo} alt="Logo Sandy Marrone" />

      <ul className="navbar__menu">
        <li className="navbar__item">
          <a className="navbar__link" href="#about">
            Sobre mi
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#projects">
            Proyectos
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#contact">
            Contacto
          </a>
        </li>
      </ul>

      <div className="navbar__switch">
        <BsMoon className="generalIcon" style={{ fontSize: '1.2rem' }} />
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider__switch round"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
