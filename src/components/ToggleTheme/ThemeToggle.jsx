
import React from 'react';
import { useTheme } from './ThemeContext';
import './Toglle.css'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 ' : '☀️ '}
        </button>
    );
};

export default ThemeToggle;
