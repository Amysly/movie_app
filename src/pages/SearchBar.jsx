import React, { useState } from "react";

const SearchBar = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const [results, setResults] = useState([]);

  const fetchMoviesSearch = async (query) => {
    if (!query) {
      setResults([]); // Clear results if query is empty
      return;
    }

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d75dd5b8a72d92f2c8afb0214abde1bb&language=en-US&query=${query}`
      );
      const data = await res.json();
      setResults(data.results || []); // Safely handle undefined results
    } catch (error) {
      console.error("Error fetching movies:", error);
      setResults([]); // Clear results on error
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchMovies(value);
    fetchMoviesSearch(value);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-5">
<input
      type="text"
      placeholder="Search movies here"
      className="border-2 border-gray-700 lg:w-full max-w-md p-2 
      bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
      placeholder-gray-500 dark:placeholder-gray-400 
      rounded-md placeholder:text-lg placeholder:font-serif"
      value={searchMovies}
      onChange={handleChange}
/>

      {results.length > 0 && (
        <div className="mt-5">
          <h2 className="lg:text-3xl font-serif ml-10">Search Movies:</h2>
          <ul className="grid lg:grid-cols-5 gap-7 p-10 mt-2">
            {results.map((movie) => (
              <li key={movie.id} className="text-center">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                    No Image
                  </div>
                )}
                <p className="lg:text-2xl font-serif">{movie.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchMovies && results.length === 0 && (
        <p className="text-gray-500 mt-5">No results found.</p>
      )}
    </div>
  );
};

export default SearchBar;
