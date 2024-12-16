import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importing CSS
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      {/* Logo and Brand Name */}
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="City Nest Logo" />
        City Nest
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`line ${isOpen ? 'open' : ''}`}></span>
        <span className={`line ${isOpen ? 'open' : ''}`}></span>
        <span className={`line ${isOpen ? 'open' : ''}`}></span>
      </div>

      {/* Links Section */}
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/listings" className="nav-link" onClick={() => setIsOpen(false)}>Listings</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
