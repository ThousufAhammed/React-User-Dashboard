import React from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useUsers();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">◈</span>
        <span className="brand-name">UserBase</span>
      </Link>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
        <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
      </button>
    </nav>
  );
}
