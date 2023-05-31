import { CardBox, CardImg, CardList, Button } from './Card.styled';
import { getGenresById } from 'services/genres';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';
const Card = ({ info }) => {
  const { poster_path, original_title, popularity, overview, genres } = info;
  const imgURL = `https://image.tmdb.org/t/p/w500`;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');
  return (
    <>
      <CardBox>
        <Button to={backLink.current}>Go back</Button>
        <CardImg
          src={
            poster_path
              ? `${imgURL}${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/8/81/Do_everything_you_can_for_us_to_withstand_together_in_this_war_for_our_freedom_and_independence_-_address_by_President_of_Ukraine_Volodymyr_Zelenskyy._%2851977034742%29_%28cropped%29.jpg`
          }
          alt="film poster"
        />
        <CardList>
          <li>
            <h1>{original_title}</h1>
            <p>User Score: {Math.round(popularity) + `%` || `No info`}</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres:</h2>
            <p>{genres && getGenresById(genres)}</p>
          </li>
        </CardList>
      </CardBox>
      <div>
        <h3>Additional information</h3>
        <CardList>
          <li style={{ marginBottom: `5px` }}>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </CardList>
      </div>
    </>
  );
};
export { Card };

Card.prototypes = {
  info: PropTypes.object,
};
