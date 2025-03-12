import React from 'react';

const GenreFilter = ({ setGenre }) => {
  return (
    <select onChange={(e) => setGenre(e.target.value)}>
      <option value="">All Genres</option>
      <option value="Fiction">Fiction</option>
      <option value="Science Fiction">Science Fiction</option>
      {/* Add more genres as needed */}
    </select>
  );
};

export default GenreFilter;
