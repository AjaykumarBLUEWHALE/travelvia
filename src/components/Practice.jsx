import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    { id: "north america", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a005c43396a83b656d2_1.avif", place: "New York", country: "USA" ,price:"ab Rs.5,45,676"},
    { id: "south america", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a005c43396a83b656d2_1.avif", place: "Rio", country: "Brazil" ,price:"ab Rs.5,45,676"},
    { id: "asia", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227ba194899447c6da79c4_1.avif", place: "Delhi", country: "India" ,price:"ab Rs.5,45,676"},
    { id: "africa", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227ba194899447c6da79c4_1.avif", place: "Tokyo", country: "Japan" ,price:"ab Rs.5,45,676"},
    { id: "europe", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227bb9eddb8eec160eef18_4.avif", place: "Paris", country: "France" ,price:"ab Rs.5,45,676"},
        { id: "oceania", url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227bb9eddb8eec160eef18_4.avif", place: "Paris", country: "France" ,price:"ab Rs.5,45,676"},
  ];

  const [selectedContinent, setSelectedContinent] = useState("north america");

  // Filter the images based on selected continent
  const filteredImages = images.filter((item) => item.id === selectedContinent);

  const continents = ["north america", "south america","asia", "europe", "africa", "oceania"];

  return (
    <div className="m-auto p-7">
      {/* Unordered List of Continents */}
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", cursor: "pointer" }}>
        {continents.map((continent) => (
          <li
            key={continent}
            onClick={() => setSelectedContinent(continent)}
            style={{
              fontWeight: selectedContinent === continent ? "bold" : "normal",
              borderBottom: selectedContinent === continent ? "2px solid blue" : "none",
            }}
          >
            {continent.toUpperCase()}
          </li>
        ))}
      </ul>

      {/* Display Filtered Images */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {filteredImages.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.place} width="150" height="100" />
            <p>{item.place}</p>
            <p>{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
