import React, { useRef, useState } from "react";

const Article = () => {
  const img = [
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671e9aa60115a7ce81a3bbd7_6.avif",
    data: "Traveling to Bali: top 10 hotels and activities",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec978d428784e17fefad_22.avif",
    data: "Vacation in nature: experience wildlife and culinary delights",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec8b420cf850294aa828_21.avif",
    data: "Swimming in paradise: swimming with pigs in the crystal clear waters of the Bahamas",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec74a29ea1a5d1cf26c7_20.jpg",
    data: "Travel to Dubai: top 10 hotels and activities",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec5da4a087d96ce807b2_19.avif",
    data: "Pure relaxation: the best wellness destinations in germany for a relaxing weekend",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eebd44fe74399614ea1e7_18.avif",
    data: "Magical holiday destinations that are still undiscovered – hidden gems with Travel Next LvL and CHECK24",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eebc531fee82d138ef627_17.avif",
    data: "Crystal clear waters: dream destinations around the world – not just in the Maldives",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eaadad707d274800d7d30_16.avif",
    data: "Hidden gems: resorts surrounded by breathtaking nature, cuisine, and relaxation",
    date: "November 6, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eaad26a9ff0cd1edd25e3_15.avif",
    data: "Hidden Gem Kos, Greece: a short flight to pure relaxation with swim-up pools",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eaac930615185acfc1f88_14.avif",
    data: "Flamingos up close in paradise: unforgettable travel experiences",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eaabc0115a7ce81aff054_13.avif",
    data: "The most beautiful beaches and resorts in the Maldives: your paradise vacation",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671e9ae7729d37cec59b6efe_12.avif",
    data: "The best animal-friendly trips: breathtaking nature and unforgettable activities",
    date: "November 15, 2024"
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671e9ade248a1b1d23ff4536_11.avif",
    data: "The most beautiful places in Europe: discover the best travel destinations on CHECK24",
    date: "November 15, 2024"
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
  return (<>
  
      <div
    ref={carouselRef}
      className="carousel menu"
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
    <div class="parent7 ml-0 sm:mt-0 mt-9 ">
<img className="h-[270px] mt-[-10px] w-[190px]  p-2 rounded-2xl" src={n.url}  alt={n.alt}
      draggable={false} />
<div className="sm:w-[150px] w-40 text-[15px] h-[150px]  bg-transparent text-black rounded-2xl p-2">
<h1 className="opacity-50 text-[12px]">{n.data}</h1>
<h1 className="underline">read more</h1>
<h2 className="mt-[150px]">{n.date}</h2>
</div>

</div>
  
  </div>
))}


    </div>
          <p className='text-[33px] w-[500px] hidden md:block menu ml-[50px]'>Travel isn’t just about personal milestones or
showing off experiences. It’s transformative
not because it changes who we are, but
because it builds connections that have the
power to shape the world. Those who
embrace the complexity of life—both near
and far—gain a clearer perspective.</p>
  </>

  )
}

export default Article

