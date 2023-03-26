import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import Logo from '../assets/img/logo-samcreative.svg';
import { BsWhatsapp } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';

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
      <a
        style={{
          lineHeight: '0px',
        }}
        href="#"
      >
        <img className="navbar__logo" src={Logo} alt="Logo Sandy Marrone" />
      </a>

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

      <button className="navbar__navBtn">
        <BsWhatsapp className="navBtn__icon" /> Hablemos
      </button>

      {/* <div className="navbar__phone">
        <a className="navbar__link" href="#">
          <BsTelephoneFill /> +58 412 8684096
        </a>
      </div> */}

      {/* <div className="navbar__switch">
        <BsMoon className="generalIcon" style={{ fontSize: '1.2rem' }} />
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider__switch round"></span>
        </label>
      </div> */}
    </nav>
  );
}

export default Navbar;
