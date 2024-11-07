// import React, { createContext, useState } from 'react';

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [favorites, setFavorites] = useState([]);
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   const addFavorite = (movie) => {
//     setFavorites((prevFavorites) => [...prevFavorites, movie]);
//   };

//   const removeFavorite = (id) => {
//     setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.imdbID !== id));
//   };

//   return (
//     <MovieContext.Provider value={{
//       searchQuery,
//       setSearchQuery,
//       favorites,
//       addFavorite,
//       removeFavorite,
//       theme,
//       toggleTheme,
//     }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };
