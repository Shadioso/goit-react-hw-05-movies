import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const FilmList = ({ searchFilm }) => {
  const location = useLocation();
  return (
    <ul>
      {searchFilm.map(({ title, id, name, original_title }) => {
        return (
          <li key={id}>
            <Link
              to={
                location.pathname === `/`
                  ? `movies/${id.toString()}`
                  : `${id.toString()}`
              }
              state={{ from: location }}
            >
              {title || name || original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { FilmList };

FilmList.prototypes = {
  searchFilm: PropTypes.array,
};
