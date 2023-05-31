import { apiReview } from 'services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Review = () => {
  const { movieId } = useParams();
  const [dataReview, setDataReview] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiReview(movieId);
        setDataReview(responce);
      } catch (error) {}
    };
    fetchFilm();
  }, [movieId]);

  return (
    <ul>
      {dataReview.length > 0 ? (
        dataReview.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <h3>There are no reviews yet</h3>
      )}
    </ul>
  );
};

export default Review;
