import './Footer.css';
import Logo from '../assets/img/logo-samcreative.svg';
import Logoletras from '../assets/img/letras-samcreative.svg';
import { BsInstagram, BsGithub, BsBehance, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import ScrollButtonFooter from './ScrollButtonFooter';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer>
      <div className="footer__container footer">
        <img
          className="footer__logo"
          src={Logoletras}
          alt="Logo Sandy Marrone"
        />
        <p className="footer__text">Más contenido en mis redes sociales:</p>

        <div className="footer__icons">
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <BsInstagram className="footer__icon" />
          </a>
          <a
            href="https://github.com/sandymarrone"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <BsGithub className="footer__icon" />
          </a>
          <a
            href="https://www.behance.net/sandymarrone"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
          >
            <BsBehance className="footer__icon" />
          </a>
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn className="footer__icon" />
          </a>
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Whatsapp"
          >
            <BsWhatsapp className="footer__icon" />
          </a>
        </div>
        <ScrollButtonFooter />
      </div>

      <div className="copyright-container copyright">
        <img className="copyright__logo" src={Logo} alt="Logo Sandy Marrone" />
        <span>Copyright © 2023 Sandy Marrone</span>
      </div>
    </footer>
  );
}

export default Footer;
