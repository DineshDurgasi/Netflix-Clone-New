import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';
import './GenrePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const GenrePage = () => {
    const { genre } = useParams();
    const [loading, setLoading] = useState(true);

    const filteredMovies = cards_data.filter((movie) => movie.genre === genre);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); 
        return () => clearTimeout(timer);
    }, [genre]);

    return (
        <div className="genre-page">
            <Navbar />
            <div className="genre-container">
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : (
                    <>
                        <h1 className="genre-title">Genre: {genre}</h1>
                        <div className="genre-grid">
                            {filteredMovies.map((movie) => (
                                <div key={movie.id} className="genre-card">
                                    <img src={movie.image} alt={movie.name} className="genre-image" />
                                    <h3 className="movie-name">{movie.name}</h3>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default GenrePage;
