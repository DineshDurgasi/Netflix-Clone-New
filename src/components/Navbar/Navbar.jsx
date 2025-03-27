import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import cardDetails from '../../assets/cards/Cards_data';
import ThemeToggle from '../ToggleTheme/ThemeToggle';

const genres = ['Action', 'Fantasy', 'Thriller', 'Biography', 'Crime', 'Sci-Fi', 'Drama', 'Superhero', 'Romance'];

const Navbar = ({ onTvShowsClick, onNewAndPopularClick, onMoviesClick }) => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1100);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGenreSelect = (event) => {
        const selectedGenre = event.target.value;
        if (selectedGenre) navigate(`/genre/${selectedGenre}`);
    };

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            const searchResults = cardDetails.filter(movie =>
                movie.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            navigate('/search', { state: { results: searchResults } });
        }
    };

    const handleHomeClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-left">
                <Link to="/" onClick={handleHomeClick}>
                    <img src={logo} alt="Netflix Logo" />
                </Link>
                {!isMobile ? (
                    <ul>
                        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                        <li onClick={onTvShowsClick}>TV Shows</li>
                        <li onClick={onMoviesClick}>Movies</li>
                        <li onClick={onNewAndPopularClick}>New & Popular</li>
                        <li onClick={() => navigate('/languages')}>Browse by Languages</li>
                    </ul>
                ) : (
                    <div className="browse-dropdown">
                        <button onClick={() => setShowDropdown(!showDropdown)}>Browse ▾</button>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                                <li><Link to="/favourites">Favourites</Link></li>
                                <li onClick={onTvShowsClick}>TV Shows</li>
                                <li onClick={onMoviesClick}>Movies</li>
                                <li onClick={onNewAndPopularClick}>New & Popular</li>
                                <li onClick={() => navigate('/languages')}>Browse by Languages</li>
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <div className="navbar-right">
                {showSearch ? (
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                        className="search-input"
                    />
                ) : (
                    <img src={search_icon} alt="Search" className='icons' onClick={handleSearchClick} />
                )}
                <div className="genre-dropdown">
                    <select className="genre-select genre-button" onChange={handleGenreSelect} defaultValue="">
                        <option value="" disabled>Genres</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre} className="genre-option">{genre}</option>
                        ))}
                    </select>
                </div>
                <ThemeToggle />
                <img src={bell_icon} alt="Notifications" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Caret" />
                    <div className="dropdown">
                        <p>Sign Out Of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;