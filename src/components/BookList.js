import React from 'react';
import booksData from '../data/booksData';
import './BookList.css';

function BookList({ onBookClick }) {
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <div key={book.id} className="book-card" onClick={() => onBookClick(book)}>
          <h3>{book.title}</h3>
          <p>Genre: {book.genre}</p>
          <p>Status: Available</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
