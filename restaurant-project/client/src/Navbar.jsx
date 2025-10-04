import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './Navbar.css';

const Navbar = ({ filters, onFilterChange, onOpenFood }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">FreshMenu</Link>
        </div>

        <div className="navbar-menu">
          <ul className={menuOpen ? 'navbar-links active' : 'navbar-links'}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/food" onClick={() => setMenuOpen(false)}>Food</Link>
            </li>
            <li>
              <Link to="/trend" onClick={() => setMenuOpen(false)}>Trending</Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setMenuOpen(false)}>Reviews</Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link to="/foods" onClick={() => setMenuOpen(false)}>Foods</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-search-auth">
          <input
            type="text"
            placeholder="Search by ID"
            value={filters.id}
            onChange={(e) => onFilterChange({ ...filters, id: e.target.value })}
            className="navbar-search-input"
          />
          <input
            type="text"
            placeholder="Search by Name"
            value={filters.name}
            onChange={(e) => onFilterChange({ ...filters, name: e.target.value })}
            className="navbar-search-input"
          />
          <input
            type="number"
            placeholder="Search by Price"
            value={filters.price}
            onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
            className="navbar-search-input"
          />
          <Link to="/login" className="auth-link signup">Login</Link>
          <Link to="/register" className="auth-link signup">Signup</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
