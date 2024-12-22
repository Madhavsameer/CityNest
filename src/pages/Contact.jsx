import React from 'react';
import '../styles/Contact.css'; // Ensure to import the updated CSS

const Contact = () => {
  return (
    <div>
      {/* Engaging Query Message */}
      <div className="contact-message">
        <p>Have a query? <span>Contact with us!</span></p>
      </div>

      <section id="contact" className="contact-section">


      
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7197.3247596186575!2d85.14890345951322!3d25.582896970021686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7f7accf4697%3A0x3998397d4963f83b!2skaushalya%20niwas!5e0!3m2!1sen!2sin!4v1734276446516!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Floating Contact Buttons */}
        <div className="floating-buttons">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7488523970" // Replace with your WhatsApp number
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://th.bing.com/th/id/OIP.hbr47SG8Nl1CUsQBVLhz_AHaHa?rs=1&pid=ImgDetMain" alt="WhatsApp" />
          </a>

          {/* Call Button */}
          <a href="tel:+917488523970" className="call-btn">
            <img src="https://th.bing.com/th/id/OIP.hE6M1KsmyCKGI4Rx8OWpAQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Call" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
