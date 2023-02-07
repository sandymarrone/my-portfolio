import './SocialFixed.css';
import { BsInstagram, BsGithub, BsBehance } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

function SocialFixed() {
  return (
    <div className="socialMedia">
      <a
        href="#"
        className="socialMedia__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>

      <a
        href="#"
        className="socialMedia__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsBehance />
      </a>

      <a
        href="#"
        className="socialMedia__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>

      <a
        href="#"
        className="socialMedia__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <div className="socialMedia__line"></div>
    </div>
  );
}

export default SocialFixed;
