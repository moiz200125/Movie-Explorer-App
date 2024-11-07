// import React, { createContext, useState, useEffect } from 'react';

// export const FavoritesContext = createContext();

// const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const addFavorite = (movie) => {
//     setFavorites([...favorites, movie]);
//   };

//   const removeFavorite = (id) => {
//     setFavorites(favorites.filter(movie => movie.id !== id));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesProvider;
