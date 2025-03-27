import React, { useEffect, useState } from 'react';
import './Favourites.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  
  const removeFromFavourites = (id) => {
    const updatedFavourites = favourites.filter((movie) => movie.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites-page">
      <Navbar />
      <div className="favourites-container">
        <h1 className="favourites-title">FAVOURITES</h1>
        <div className="favourites-list">
          {favourites.length === 0 ? (
            <p>No favourites added yet!</p>
          ) : (
            favourites.map((movie) => (
              <div key={movie.id} className="favourite-card">
                <img src={movie.image} alt={movie.name} className="favourite-image" />
                <h3 className="favourite-name">{movie.name}</h3>
                <button className="remove-button" onClick={() => removeFromFavourites(movie.id)}>
                  Remove from Favourites
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
