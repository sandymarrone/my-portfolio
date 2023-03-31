import './ProjectInfo.css';
import { BsX } from 'react-icons/bs';

export default function ProjectInfo({ onClose }) {
  return (
    <div className="ProjectInfo">
      <div className="ProjectInfo__container">
        <button className="closePopUp" onClick={onClose}>
          <BsX className="closePopUp__icon" />
        </button>
        <div className="ProjectInfo__header">{/* <img src="" alt="" /> */}</div>
      </div>
    </div>
  );
}
