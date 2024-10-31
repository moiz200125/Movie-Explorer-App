// src/components/SearchBar.js
import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const { setSearchQuery } = useContext(MovieContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
