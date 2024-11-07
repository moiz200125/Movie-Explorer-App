import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.plot}</p>
      <Link to={`/movie/${movie.id}`}>More Details</Link>
      <button className="favorite-button">
        Add to Favorites
      </button>
    </div>
  );
};

// Prop validation
MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
