import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';
import './SelectByLanguage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const LanguagePage = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const languages = ['Hindi', 'Telugu', 'English', 'Tamil', 'Malayalam'];

    const handleLanguageChange = (event) => {
        const language = event.target.value;
        setSelectedLanguage(language);
    };

    const filteredCards = cards_data.filter(card => card.language === selectedLanguage);

    return (
        <div className="language-page">
            <Navbar/>
            <h1>Browse by Language</h1>

            <select onChange={handleLanguageChange} value={selectedLanguage} className="language-dropdown">
                <option value="" disabled>Select a Language</option>
                {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>

            <div className="card-container">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.name} className="card-image" />
                            <h3>{card.name}</h3>
                        </div>
                    ))
                ) : (
                    <p>Select a language to view movies and shows.</p>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default LanguagePage;
