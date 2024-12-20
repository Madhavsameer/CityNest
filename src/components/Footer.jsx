import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import countapi from "countapi-js";
import "../styles/Footer.css";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(856);

  useEffect(() => {
    // Hit CountAPI to increment and retrieve the visit count
    countapi.hit('https://citynest.netlify.app', 'visit')
      .then((result) => {
        console.log('Visitor count updated:', result.value);
        setVisitCount(result.value);
      })
      .catch((error) => console.error('Error with CountAPI:', error));
  }, []);

  return (
    <footer className="footer">
      <p>&copy; 2024 City Nest | All rights reserved</p>
      <p>Visitor Count: {visitCount}</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.instagram.com/citynestpatna" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
