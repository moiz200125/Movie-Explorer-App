import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/constants/movies.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const movie = data.find(movie => movie.id === parseInt(id));
        setMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <img className="movie-poster" src={movie.posterUrl} alt={movie.title} />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
        <p><strong>Plot:</strong> {movie.plot}</p>
        <Rating totalStars={5} />
      </div>
    </div>
  );
};

export default MovieDetails;
