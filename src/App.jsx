import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Homepage from "./Components/Homepage";
import MainLayout from "./layout/MainLayout";
import MoviesDetail, { movieLoader } from "./pages/MoviesDetail";
import Genres from "./pages/Genres";
import Home from "./pages/Home"; 
import NotFound from "./pages/NotFound"; 


function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=d75dd5b8a72d92f2c8afb0214abde1bb"
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchGenres = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=d75dd5b8a72d92f2c8afb0214abde1bb&language=en-US`
        );
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchMovies();
    fetchGenres();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route
          index
          element={<Homepage movies={movies} isLoading={isLoading}  genres={genres}  />}
        />
        <Route
          path="genres"
          element={<Genres movies={movies} genres={genres} isLoading={isLoading} />}
        />
        <Route path="movies" element={<Home movies={movies} isLoading={isLoading} />} />

        <Route path="movie/:id" element={<MoviesDetail />} loader={movieLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return <RouterProvider router={router} />;
}

export default App;
