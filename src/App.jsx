
import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import Favourites from './pages/Favourites/Favourites.jsx';
import GenrePage from './pages/Genres/GenerPage.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import LanguagePage from './pages/SearchByLanguage/SelectByLanguage.jsx';
import { ThemeProvider } from './components/ToggleTheme/ThemeContext.jsx';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/movie-details' element={<MovieDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/genre/:genre" element={<GenrePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/languages" element={<LanguagePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
