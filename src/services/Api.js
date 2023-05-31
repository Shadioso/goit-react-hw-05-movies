// Популярні фільми
const api = async () => {
  const URL = `https://api.themoviedb.org/3`;
  const KEY = `731f4a410992078035fa504a629d03c1`;
  const resolved = await fetch(`${URL}/trending/all/day?api_key=${KEY}&page=1`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return console.log(` Error ${res.status}`);
    })
    .then(responce => {
      return responce.results;
    })
    .catch(error => console.log(`Error ${error.status}`));
  return resolved;
};
// За ключовим словом
export const apiFilm = async filmName => {
  const KEY = `731f4a410992078035fa504a629d03c1`;
  const URL = `https://api.themoviedb.org/3`;
  const resolved = await fetch(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=1`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return console.log(` Error ${res.status}`);
    })
    .then(responce => {
      return responce.results;
    })
    .catch(error => console.log(`Error ${error.status}`));
  return resolved;
};
// За id

export const apiId = async filmId => {
  const KEY = `731f4a410992078035fa504a629d03c1`;
  const URL = `https://api.themoviedb.org/3`;
  const resolved = await fetch(
    `${URL}/movie/${filmId}?api_key=${KEY}&language=en-US`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return console.log(` Error ${res.status}`);
    })
    .then(responce => {
      return responce;
    })
    .catch(error => console.log(`Error ${error.status}`));
  return resolved;
};

// Каст

export const apiCast = async filmId => {
  const KEY = `731f4a410992078035fa504a629d03c1`;
  const URL = `https://api.themoviedb.org/3`;
  const resolved = await fetch(
    `${URL}/movie/${filmId}/credits?api_key=${KEY}&language=en-US`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return console.log(` Error ${res.status}`);
    })
    .then(responce => {
      return responce.cast;
    })
    .catch(error => console.log(`Error ${error.status}`));
  return resolved;
};

// Review

export const apiReview = async filmId => {
  const KEY = `731f4a410992078035fa504a629d03c1`;
  const URL = `https://api.themoviedb.org/3`;
  const resolved = await fetch(
    `${URL}/movie/${filmId}/reviews?api_key=${KEY}&language=en-US`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return console.log(` Error ${res.status}`);
    })
    .then(responce => {
      return responce.results;
    })
    .catch(error => console.log(`Error ${error.status}`));
  return resolved;
};
export default api;
