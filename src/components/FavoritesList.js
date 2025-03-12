import React, { useState, useEffect } from 'react';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-list">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet!</p>
      ) : (
        favorites.map((book) => (
          <div key={book.id} className="favorite-book">
            <h3>{book.title}</h3>
            <button onClick={() => removeFavorite(book.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
