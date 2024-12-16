import React from 'react';
import '../styles/Home.css'; // Assuming CSS file is in the styles folder
import { Link } from 'react-router-dom';
import Services from './Services';
import Footer from '../components/Footer';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        
        <h6 className="header-titlea">Welcome to City Nest</h6>
        <p className="header-subtitle">Shaping Lives, Nurturing Futures</p>
        <Link to="./services" className="cta-button">Explore Services</Link>
      </header>
      <Services/>
      <About/>
      
      <Contact/>


      
    </div>
  );
};

export default Home;