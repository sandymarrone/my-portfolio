import './FilterButtonsList.css';
import { BsStars } from 'react-icons/bs';

export const FilterButtonsList = ({
  categories,
  filterCategory,
  activeButton,
}) => {
  return (
    <div className="projects__buttons">
      {categories.map((category) => {
        return (
          <button
            className={`filterButton ${
              activeButton === category ? 'active' : ''
            }`}
            onClick={() => filterCategory(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
