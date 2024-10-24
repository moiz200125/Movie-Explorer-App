import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(MovieContext);

  return (
    <header>
      <h1>Movie Explorer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
