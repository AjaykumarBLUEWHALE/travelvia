import React, { useRef, useState } from "react";


const Carousel = () => {
 const img = [
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a005c43396a83b656d2_1.avif",
    alt: "tour",
    place: "Hollywood",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a0a6e451c6eb2e24242_2.avif",
    alt: "tour",
    place: "Beverly Hills",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a363a8ae770ec4b98bd_7.avif",
    alt: "tour",
    place: "Banff National Park",
    country: "Alberta, Canada",
    link: "https://aviasales.tpo.lu/9PvFEtGL"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a3ef512dbbbede743dc_8.avif",
    alt: "tour",
    place: "Cancún",
    country: "Quintana Roo, Mexico",
    link: "https://aviasales.tpo.lu/D5WBVe8X"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227bb1dcad6c8e4a9a5130_3.avif",
    alt: "tour",
    place: "Tayrona National Natural Park",
    country: "Santa Marta, Colombia",
    link: "https://aviasales.tpo.lu/PobHQVlo"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228227d300d3b0345bf146_7.avif",
    alt: "tour",
    place: "Ko Samui",
    country: "Surat Thani, Thailand",
    link: "https://aviasales.tpo.lu/nvWHBADO"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228782f19a4142585963f8_1.avif",
    alt: "tour",
    place: "Cappadocia",
    country: "Central Anatolia, Turkey",
    link: "https://aviasales.tpo.lu/aEBt3SLf"
  }
];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    const pageX = e.pageX || e.touches[0].pageX;
    setStartX(pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseDown={startDrag}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
      onMouseMove={onDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
    >
    {img.map((n) => (
  <div className="w-[340px] h-[300px] card relative overflow-hidden" key={n}>
    {/* Image background */}
    <img
      src={n.url}
       loading="lazy" 
      alt={n.alt}
      draggable={false}
      className="object-cover brightness-75 h-full w-full rounded"
    />

    {/* Text overlay */}
      <div className="absolute top-0 left-0 w-full p-3  text-white">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{n.place}</h1>
      
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-3  text-white">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{n.country}</h1>
        <h1 className="text-lg font-semibold">{n.price}</h1>
      </div>
    </div>
  </div>
))}

    </div>
  );
};

export default Carousel;
