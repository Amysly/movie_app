import React from 'react';
import {useLoaderData } from 'react-router-dom';

const MoviesDetail = () => {
  const { movieData, creditsData } = useLoaderData();

  if (!movieData) {
    return <div>Movie details not found.</div>;
  }

  const { title, overview, vote_average, poster_path } = movieData;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="">
      <div>
        <div className="flex justify-center">
        <img src={`${imageBaseUrl}${poster_path}`} alt={title} className='mt-5 mb-4' />
        </div>
        <div className="">
          <h1 className='text-center font-serif lg:text-4xl mt-3 mb-5'>{title}</h1>
          <p className='text-center font-serif lg:text-2xl mb-3'>Rating: {vote_average}/10</p>
          <p className='text-center font-serif lg:text-2xl mt-3 mb-4 p-10'>{overview}</p>
        </div>
      </div>

      <div className="">
        <h2 className='text-center font-serif lg:text-4xl mt-3 mb-4'>Cast</h2>
        <ul className='text-center font-serif lg:text-2xl'>
          {creditsData?.cast?.slice(0, 5).map((actor) => (
            <li key={actor.cast_id}>
              {actor.name} as {actor.character}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const movieLoader = async ({ params }) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=d75dd5b8a72d92f2c8afb0214abde1bb`
  const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=d75dd5b8a72d92f2c8afb0214abde1bb`
  try {
    const [movieRes, creditsRes] = await Promise.all([
      fetch(movieDetailsUrl),
      fetch(movieCreditsUrl),
    ]);

    const movieData = await movieRes.json();
    const creditsData = await creditsRes.json();

    return { movieData, creditsData };
  } catch (error) {
    console.error("Error fetching moviesdetails and moviecredit:", error);
  }
  return { movieData: null, creditsData: null };

};


export { MoviesDetail as default, movieLoader };
