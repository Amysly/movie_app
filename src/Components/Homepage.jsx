import React from 'react';
import Home from "../pages/Home"; 
import Background from '../Components/Background';
import SearchBar from '../pages/SearchBar';
import Genres from '../pages/Genres';
import Footer from '../pages/Footer';



const Homepage = ({ movies,genres, isLoading }) => {
  return (
    <>
       <Background movies={movies} />
       <SearchBar/>
    <div className="home">
      {isLoading ? <div>Loading...</div> : <Home movies={movies} genres={genres} />}
    </div>
    <Genres movies={movies} genres={genres}/>
    <Footer/>
    </>
    
  );
};

export default Homepage;
