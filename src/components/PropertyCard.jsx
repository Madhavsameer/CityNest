import React from "react";
import '../styles/PropertyCard.css'

const PropertyCard = ({ property }) => {
  const imagePath = require(`../assets/${property.image}`); // Dynamically resolve image path

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagePath} className="card-img-top" alt={property.title} />
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <br />
        <p className="card-text">{property.location}</p>
        <br />
        <p className="card-text"><strong>{property.price}</strong></p>
        <br />
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
