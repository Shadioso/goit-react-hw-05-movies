import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Layout = lazy(() => import('./Navigation/Layout'));
const FilmInfo = lazy(() => import('./FIlmList/FilmInfo/FilmInfo'));
const Cast = lazy(() => import('./FIlmList/Cast/Cast'));
const Review = lazy(() => import('./FIlmList/Cast/Review/Review'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
