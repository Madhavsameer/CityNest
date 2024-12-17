import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import propertiesData from "../data/properties.json";
import "../styles/PropertyDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2>Property Not Found</h2>;
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="property-details">
      <h1>{property.title}</h1>
      <Slider {...settings}>
        {property.images.map((image, index) => (
          <div key={index}>
            <img
              src={require(`../assets/${image}`)}
              alt={`Property ${index}`}
              className="property-image"
            />
          </div>
        ))}
      </Slider>
      <div className="property-info">
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> {property.price}
        </p>
        <p>
          <strong>Description:</strong> {property.description}
        </p>
        <p>
          <strong>Type:</strong> {property.type}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
