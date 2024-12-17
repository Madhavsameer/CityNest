import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PropertyCard.css";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  // Default image fallback
  const defaultImage = require("../assets/first.png");

  // Safely access the first image or use a fallback image
  const imagePath = property.images && property.images.length > 0
    ? require(`../assets/${property.images[0]}`)
    : defaultImage;

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagePath} className="card-img-top" alt={property.title} />
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.location}</p>
        <p className="card-text"><strong>{property.price}</strong></p>
        <button className="btn btn-primary" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
