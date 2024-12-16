import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Importing CSS from styles folder
import logo from '../assets/logo.png';  // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="City Nest Logo" />
        City Nest
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/listings" className="nav-link">Listings</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
