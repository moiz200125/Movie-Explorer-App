import { Link } from 'react-router-dom';

const MovieCard = (movie) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.plot}</p>
      <Link to={`/movie/${movie.id}`}>More Details</Link>
    </div>
  );
};

export default MovieCard;
