import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties.json"; // Import property data
import "../styles/Listings.css";

const Listings = () => {
  const [properties, setProperties] = useState([]); // All properties
  const [filteredProperties, setFilteredProperties] = useState([]); // Filtered properties
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [activeFilter, setActiveFilter] = useState("All"); // Active filter (e.g., 'All', 'To-let', 'Flat', 'Land')

  // Load properties data and filter them
  useEffect(() => {
    // Simulate fetching data or directly load from the data file
    setProperties(propertiesData);
    setFilteredProperties(propertiesData); // Initialize with all properties
    setLoading(false); // Set loading to false after data is loaded
  }, []);

  // Handle filter button click
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === "All") {
      setFilteredProperties(properties); // Show all properties
    } else {
      setFilteredProperties(
        properties.filter((property) => property.type === type)
      );
    }
  };

  // Handle search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProperties(
      properties.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="container">
      <h1>Available Properties</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by 2 BHK, location, flat, land..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Flat", "Home", "Land", "To-let"].map((type) => (
          <button
            key={type}
            className={activeFilter === type ? "active" : ""}
            onClick={() => handleFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Listings */}
      {loading ? (
        <p className="loading-message">Loading properties...</p>
      ) : filteredProperties.length > 0 ? (
        <div className="listings">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="no-results-message">No properties found!</p>
      )}
    </div>
  );
};

export default Listings;
