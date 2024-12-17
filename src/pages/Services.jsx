import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      title: "Home/Land Buying and Selling",
      description:
        "Simplify the process of buying or selling your home with our trusted real estate services.",
      icon: "🏡",
      link: "/buy-sell", // Define the link for this service
    },
    {
      title: "Real Estate Consultation",
      description:
        "Get expert advice and guidance on buying, selling, or managing properties with our experienced team.",
      icon: "💼",
      link: "/consultation", // Define the link for this service
    },
    {
      title: "Property Management",
      description:
        "We take care of all property management needs, from maintenance to tenant handling.",
      icon: "🔑",
      link: "/property-management", // Define the link for this service
    },
    {
      title: "Property Rentals",
      description:
        "Find the perfect rental property for your needs, with options for residential and commercial spaces.",
      icon: "🏠",
      link: "/rentals", // Define the link for this service
    },
  ];

  return (
    <div className="services">
      <h1 className="services__title">Our Services</h1>
      <div className="services__grid">
        {services.map((service, index) => (
          <Link to="/listings" key={index} className="service__card">
            <div className="service__icon">{service.icon}</div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__description">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
