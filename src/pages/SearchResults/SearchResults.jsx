import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); 
        return () => clearTimeout(timer);
    }, [results]);

    return (
        <div className="search-results-page">
            <Navbar />
            <div className="search-results-container">
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : results.length === 0 ? (
                    <p className="no-results">No movies found.</p>
                ) : (
                    <div className="search-results-list">
                        {results.map((movie) => (
                            <div key={movie.id} className="search-card">
                                <img src={movie.image} alt={movie.name} className="search-image" />
                                <h2 className="search-name">{movie.name}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default SearchResults;
