import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MovieDetails = () => {
  const location = useLocation();
  const { card } = location.state || {};

  // Add to Favourites
  const addToFavourites = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (!favourites.some((fav) => fav.id === card.id)) {
      favourites.push(card);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      alert('Added to Favourites!');
    } else {
      alert('Already in Favourites!');
    }
  };

  if (!card) return <h2>No card data available</h2>;

  return (
    <div className="movie-details-page">
      <Navbar />
      <div className="movie-details-container">
        
        <img className="movie-poster" src={card.image} alt={card.name} />

        
        <div className="movie-content">
          <h1>{card.name}</h1>

          <p className="movie-description">{card.description}</p>

          <div className="movie-meta">
            <span>Genre: {card.genre}</span>
            <span>Release Date: {card.releaseDate}</span>
          </div>

          <div className="rating">⭐ {card.rating}/10</div>

          <button onClick={addToFavourites} className='atf_button'>Add to Favourites</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;