import React from "react";
import { Link } from "react-router-dom";

const Geners = ({ movies, genres, isLoading }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!movies || !genres || movies.length === 0 || genres.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <section id="genres">
      <h1 className="text-3xl font-serif mt-10 mb-3 ml-10">Genres</h1>
      {genres.map((genre,index) => (
        <div key={genre.id} className="genre-section">
          <h2 className="text-3xl font-bold text-center mt-3">{genre.name}</h2>
          <div className="grid lg:grid-cols-5 gap-7 p-10 mt-2">
            {movies
              .filter((movie) => movie.genre_ids.includes(genre.id))
              .map((movie) => (
                <div key={movie.id} 
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`} 
                className="text-center">
                  <Link to={`/movie/${movie.id}`}>
                    <img  className="w-full h-auto transform hover:translate-x-2 hover:scale-105 transition-all duration-300"
                      src={`${imageBaseUrl}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <p className="lg:text-2xl font-serif mt-3 mb-3">{movie.title}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Geners;
