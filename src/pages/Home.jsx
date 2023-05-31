import { useState, useEffect } from 'react';
import { FilmList } from 'components/FIlmList/FIlmList';
import api from 'services/Api';
const Home = () => {
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

  return (
    <>
      <h1>Trending today</h1>
      {searchFilm.length > 0 && <FilmList searchFilm={searchFilm} />}
    </>
  );
};

export default Home;
