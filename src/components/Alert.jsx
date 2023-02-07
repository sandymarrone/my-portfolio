import './Alert.css';
import { FaCopy } from 'react-icons/fa';

function Alert() {
  return (
    <div className="alert">
      <div className="alert__container">
        <span className="alert__text">
          <FaCopy className="alert__icon" /> ¡Copiado en el portapapeles!
        </span>
      </div>
    </div>
  );
}

export default Alert;
