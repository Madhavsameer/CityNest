import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./pages/PropertyDetails";
import logo from "./assets/logo.png"; // Replace with your logo path
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate sparkles for the shooting particle effect
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
    }));
    setSparkles(newSparkles);

    // Set loading to false after 2.5 seconds, and enable scroll
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Re-enable scrolling after loading
    }, 2500);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="animation-wrapper">
          {/* Logo container with burst animation */}
          <div className="logo-container">
            {/* Circular pulse waves */}
            <div className="circle-wave"></div>
            <div className="circle-wave"></div>
            <div className="circle-wave"></div>

            {/* Logo */}
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Particle sparkles */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
              }}
            ></div>
          ))}
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
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
