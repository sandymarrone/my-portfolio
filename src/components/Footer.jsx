import './Footer.css';
import Logo from '../assets/img/logo.png';
import { BsInstagram, BsGithub, BsBehance, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';
import ScrollButtonFooter from './ScrollButtonFooter';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer>
      <div className="footer__container">
        <span>Copyright © Sandy Marrone 2023</span>
        {/* <img className="navbar__logo" src={Logo} alt="Logo Sandy Marrone" /> */}
        <ScrollButtonFooter />
        <div className="footer__icons">
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <BsInstagram style={{ fontSize: '1.2rem' }} />
          </a>
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <BsGithub style={{ fontSize: '1.2rem' }} />
          </a>
          <a
            href="https://www.behance.net/sandymarrone"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
          >
            <BsBehance style={{ fontSize: '1.2rem' }} />
          </a>
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn style={{ fontSize: '1.2rem' }} />
          </a>
          <a
            href="#"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Whatsapp"
          >
            <BsWhatsapp style={{ fontSize: '1.2rem' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
