import React from 'react';
import movies from '../constants/movies';
import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
