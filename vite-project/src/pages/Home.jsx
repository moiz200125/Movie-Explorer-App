// import React, { useState, useEffect } from 'react';
// import MovieList from '../components/MovieList';
// import SearchBar from '../components/SearchBar';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async (query) => {
//     const response = await fetch(`https://api.omdbapi.com/movies?query=${query}`);
//     const data = await response.json();
//     setMovies(data.results);
//   };

//   useEffect(() => {
//     fetchMovies('');
//   }, []);

//   return (
//     <div>
//       <SearchBar onSearch={fetchMovies} />
//       <MovieList movies={movies} />
//     </div>
//   );
// };

// export default Home;


import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import './Home.css'
import movies from '../constants/movies'


const Home = () => {
  return (
    <div>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
