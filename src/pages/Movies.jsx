import { useState, useEffect } from 'react';
import { apiFilm } from 'services/Api';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/Searchbar/Searchbar';
const Movies = () => {
  const [searchArea, setsearchArea] = useState(``);
  const [dataFilm, setDataFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiFilm(
          searchParams.get(`querty`) !== null ? searchParams.get(`querty`) : ``
        );
        setDataFilm(responce);
      } catch (error) {}
    };
    fetchFilm();
  }, [searchParams]);

  const onInputChange = e => {
    setsearchArea(e.target.value.toLowerCase().trim());
  };
  const onSubmit = e => {
    e.preventDefault();
    if (searchArea) {
      setSearchParams({ querty: searchArea });
    }
  };
  return (
    <SearchBar
      onSubmit={onSubmit}
      onInputChange={onInputChange}
      dataFilm={dataFilm}
    />
  );
};

export default Movies;
