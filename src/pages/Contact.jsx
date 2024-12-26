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
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d238.98111970607422!2d85.14855906276549!3d25.58227327277533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f2a7da5eeffc05%3A0xb067975cf72b7c2d!2sCity%20Nest%20patna%2C%20E%20Ram%20Krishna%20Nagar%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800027!3m2!1d25.5824329!2d85.14877729999999!5e0!3m2!1sen!2sin!4v1735205209193!5m2!1sen!2sin"
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
