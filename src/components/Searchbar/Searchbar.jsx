import { FilmList } from 'components/FIlmList/FIlmList';
import {
  SearchBarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

const SearchBar = ({ onSubmit, onInputChange, dataFilm }) => {
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
