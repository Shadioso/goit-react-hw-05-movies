import { useState, useEffect } from 'react';
import { apiFilm } from 'services/Api';
import { FilmList } from 'components/FIlmList/FIlmList';
import { useSearchParams } from 'react-router-dom';
import {
  SearchBarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

const SearchBar = () => {
  const [searchArea, setsearchArea] = useState(``);
  const [dataFilm, setDataFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiFilm(searchParams.get(`querty`));
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
    if (searchArea !== ``) {
      setSearchParams({ querty: searchArea });
    }
    return;
  };

  return (
    <>
      <SearchBarBox>
        <SearchForm onSubmit={onSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search film"
            onChange={onInputChange}
          />
        </SearchForm>
      </SearchBarBox>
      <FilmList searchFilm={dataFilm} />
    </>
  );
};

export default SearchBar;
