import React, { useRef, useState } from "react";

const CountryDestination = () => {
  const continents = [
    { country: "North America" },
    { country: "South America" },
    { country: "Asia" },
    { country: "Europe" },
    { country: "Africa" },
    { country: "Oceania" },
  ];
 
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null); // renamed for clarity

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
      className="carousel2 menu flex gap-4 overflow-x-auto select-none"
      onMouseDown={startDrag}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
      onMouseMove={onDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
    >
      {continents.map((n, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`relative top-[20%] border-l border-r border-gray-300 w-full  px-10 sm:px-15transition-all duration-300 cursor-pointer ${
            activeIndex === index
              ? "bg-transparent text-black"
              : " bg-black text-white"
          }`}
        >
          <nav className="section">
            <ul className="flex justify-between  text-start py-4 px-4 items-baseline">
              <li>{n.country}</li>
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default CountryDestination;
