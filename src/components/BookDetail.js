import React from 'react';

import './BookDetail.css';

function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <img src={book.coverImage} alt={book.title} />
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Status:</strong> Available</p>
      <p><strong>Published Year:</strong> {book.year}</p>
      <div className="book-description">
        <h3>Description</h3>
        <p>{book.description}</p>
        <h3>Author Details</h3>
        <p>Additional information about the author and book.</p>
      </div>
    </div>
  );
}

export default BookDetail;
