import { useState, useEffect } from 'react';
import { FilmList } from 'components/FIlmList/FIlmList';
import api from 'services/Api';
const Trending = () => {
  const [searchFilm, setSearchFilm] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const responce = await api();
        setSearchFilm(responce);
      } catch (error) {
        console.log(`Error ${error.status}`);
      }
    };
    fetchFilms();
  }, []);

  return <>{searchFilm.length > 0 && <FilmList searchFilm={searchFilm} />}</>;
};

export default Trending;
