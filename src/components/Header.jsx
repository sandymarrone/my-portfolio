import './Header.css';
import miFoto from '../assets/img/pp.jpg';
import SocialFixed from './SocialFixed';
import ScrollButton from './ScrollButton';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <img className="header__img" src={miFoto} alt=""></img>
        <h1 className="header__title">
          <span>Diseñador</span> &amp;
          <br />
          Frontend Developer
        </h1>
        <p>
          Diseño para redes sociales y codifico cosas hermosas y sencillas para
          la web.
        </p>
      </div>

      <div className="header__scrollAnimation scrollAnimation">
        <div className="scrollAnimation__wheel"></div>
      </div>

      {/* <SocialFixed /> */}
      {/* <ScrollButton /> */}

      <div className="header__redLight"></div>
    </header>
  );
}

export default Header;
