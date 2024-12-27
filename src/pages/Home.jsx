import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
  const [isExpandedMovies, setIsExpandedMovies] = useState(false);

  
  const displayedMovies = isExpandedMovies ? movies : movies.slice(0, 15);

  const toggleMovies = () => {
    setIsExpandedMovies(!isExpandedMovies);
  };

  return (
    <>
    <section id="movies">
      <h1 className="text-3xl font-serif mt-3 mb-3 ml-10">Movies</h1>
      <div className="grid lg:grid-cols-5 gap-7 p-10 mt-2 mb-2">
        {movies && movies.length > 0 ? (
          displayedMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="text-center"
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`} 
            >
              {movie.poster_path ? (
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="w-full h-auto transform hover:translate-x-2 hover:scale-105 transition-all duration-300"
                    src={`${imageBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              ) : (
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                  <span>No Image Available</span>
                </div>
              )}
              <h1 className="lg:text-2xl font-serif mt-3 mb-3">{movie.title}</h1>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center">Loading movies...</p>
        )}
      </div>

      <button
        className="mt-5 mb-5 px-4 py-2 bg-yellow-500 text-white rounded-md font-serif lg:text-2xl ml-10"
        onClick={toggleMovies}
      >
        {isExpandedMovies ? "Less Movies" : "More Movies"}
      </button>
      </section>
    </>
  );
};

export default Home;
