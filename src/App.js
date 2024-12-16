import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"; // Replace with your logo path
import "./App.css"; // Include the CSS file

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("Setting loading to false");
      setLoading(false);
    }, 1000);
  }, []); // Ensure only runs once
  



  return (

    <Router>
      {loading ? (
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
