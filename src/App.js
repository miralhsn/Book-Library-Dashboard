import React, { useState } from 'react';
import './MainPage.css';

// Sample data for books
const booksData = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    status: 'Available',
    publishYear: 1925,
    description: 'A novel about the American dream and the 1920s society.',
    authorDetails: 'F. Scott Fitzgerald was an American novelist and short story writer.',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg' // Image from Open Library
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    status: 'Available',
    publishYear: 1960,
    description: 'A novel about racial injustice in the deep south.',
    authorDetails: 'Harper Lee was an American author known for this single book.',
    image: 'https://covers.openlibrary.org/b/id/8225261-L.jpg' // Image from Open Library
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    status: 'Out of Stock',
    publishYear: 1949,
    description: 'A novel about totalitarianism and government surveillance.',
    authorDetails: 'George Orwell was an English novelist, essayist, journalist, and critic.',
    image: 'https://covers.openlibrary.org/b/id/8200005-L.jpg' // Image from Open Library
  },
  // More books can be added here...
];

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter books based on search term
  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle book card click
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Handle back to book list
  const handleBackToList = () => {
    setSelectedBook(null);
  };

  return (
    <div className="main-page">
      <div className="sidebar">
        <h2>Library Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="main-content">
        {selectedBook ? (
          // Book Details View
          <div className="book-details">
            <button className="back-button" onClick={handleBackToList}>Back to List</button>
            <h2>{selectedBook.title}</h2>
            <img src={selectedBook.image} alt={selectedBook.title} />
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Genre:</strong> {selectedBook.genre}</p>
            <p><strong>Status:</strong> {selectedBook.status}</p>
            <p><strong>Publish Year:</strong> {selectedBook.publishYear}</p>
            <p><strong>Description:</strong> {selectedBook.description}</p>
            <p><strong>Author Details:</strong> {selectedBook.authorDetails}</p>
          </div>
        ) : (
          // Book List View
          <div>
            <div className="header">
              <h1>Book Collection</h1>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Search</button>
              </div>
            </div>

            <div className="book-list">
              {filteredBooks.map((book, index) => (
                <div
                  key={index}
                  className="book-card"
                  onClick={() => handleBookClick(book)}
                >
                  <img src={book.image} alt={book.title} />
                  <h3>{book.title}</h3>
                  <p className="genre">Genre: {book.genre}</p>
                  <p>Status: {book.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
