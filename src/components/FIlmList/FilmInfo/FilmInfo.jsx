import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiId } from 'services/Api';
import { Card } from './Card';

const FilmInfo = () => {
  const { movieId } = useParams();
  const [dataFilm, setDataFilm] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiId(movieId);
        setDataFilm(responce);
      } catch (error) {}
    };
    fetchFilm();
  }, [movieId]);
  return (
    <>
      {dataFilm && <Card info={dataFilm} />}
      <Outlet />
    </>
  );
};

export default FilmInfo;
