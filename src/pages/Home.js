import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to the Book Library</h1>
    <p>Explore our collection of books and add your favorites!</p>
    <Link to="/books">View Books</Link>
  </div>
);

export default Home;
