import { apiCast } from 'services/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastImg, CastList, ListItem } from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);
  const imgURL = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiCast(movieId);
        setDataCast(responce);
      } catch (error) {}
    };
    fetchFilm();
  }, [movieId]);
  return (
    <CastList>
      {dataCast.length > 1 ? (
        dataCast.map(({ name, profile_path, id }) => {
          return (
            <ListItem key={id}>
              <CastImg
                src={
                  profile_path
                    ? `${imgURL}${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/8/81/Do_everything_you_can_for_us_to_withstand_together_in_this_war_for_our_freedom_and_independence_-_address_by_President_of_Ukraine_Volodymyr_Zelenskyy._%2851977034742%29_%28cropped%29.jpg`
                }
                alt="actor"
              />
              <p>{name}</p>
            </ListItem>
          );
        })
      ) : (
        <h3>Sorry,no info about cast</h3>
      )}
    </CastList>
  );
};

export default Cast;
