import React, { useRef, useState } from "react";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

const Destination = () => {
const images = [
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a005c43396a83b656d2_1.avif",
    place: "Hollywood",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a0a6e451c6eb2e24242_2.avif",
    place: "Beverly Hills",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a12d2ac4eb36805164a_3.avif",
    place: "Santa Monica",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
 price: "from 76€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a1cf52476cc1cc81edf_4.avif",
    place: "New York",
    country: "New York City, USA",
    link: "https://aviasales.tpo.lu/tj5PoFp6",
 price: "from 76€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a25b9cfad9303527f35_5.avif",
    place: "Las Vegas",
    country: "Nevada, USA",
    link: "https://aviasales.tpo.lu/XA5hiF7E",
 price: "from 76€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a2d14b7248968d750e3_6.avif",
    place: "Miami",
    country: "Florida, USA",
    link: "https://aviasales.tpo.lu/B3vAUOOU",
 price: "from 76€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a363a8ae770ec4b98bd_7.avif",
    place: "Banff National Park",
    country: "Alberta, Canada",
    link: "https://aviasales.tpo.lu/9PvFEtGL",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a3ef512dbbbede743dc_8.avif",
    place: "Cancun",
    country: "Quintana Roo, Mexico",
    link: "https://aviasales.tpo.lu/D5WBVe8X",
    price: "from 36€",
  },

  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228227d300d3b0345bf146_7.avif",
    place: "Koh Samui",
    country: "Surat Thani, Thailand",
    link: "https://aviasales.tpo.lu/nvWHBADO",
    price: "from 36€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228782f19a4142585963f8_1.avif",
    place: "Cappadocia",
    country: "Central Anatolia, Turkey",
    link: "https://aviasales.tpo.lu/aEBt3SLf",
    price: "from 36€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672281f9ffa808b9c66c8faf_2.avif",
    place: "Ukulhas",
    country: "Ari Atoll, Maldives",
    link: "https://aviasales.tpo.lu/Lml17a27",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f1b2aa89e5d0a6c9996_1.avif",
    place: "Dubai",
    country: "United Arab Emirates",
    link: "https://aviasales.tpo.lu/dyvkAioI",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f2494899447c6ddc7b2_2.avif",
    place: "Gardens by the Bay",
    country: "Marina South, Singapore",
    link: "https://aviasales.tpo.lu/FsOReU9X",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f2b29fe8ec90da958b3_3.avif",
    place: "St. John's Island",
    country: "Singapore",
    link: "https://aviasales.tpo.lu/FsOReU9X",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f325e6e18aea341dda0_4.avif",
    place: "Lazarus Island",
    country: "Singapore Strait",
    link: "https://aviasales.tpo.lu/FsOReU9X",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f3d2aa89e5d0a6cc225_5.avif",
    place: "Bali",
    country: "Indonesia",
    link: "https://aviasales.tpo.lu/VK833FB6",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f46c81259bb86c63ab2_6.avif",
    place: "Lombok",
    country: "West Nusa Tenggara, Indonesia",
    link: "https://aviasales.tpo.lu/VK833FB6",
 price: "from 76€",
  },
  {
    id: "asia",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227f5c89f1ea4a28bbdd08_7.avif",
    place: "Gili Islands",
    country: "West Nusa Tenggara, Indonesia",
    link: "https://aviasales.tpo.lu/VK833FB6",
 price: "from 76€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a005c43396a83b656d2_1.avif",
    place: "Hollywood",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a0a6e451c6eb2e24242_2.avif",
    place: "Beverly Hills",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a12d2ac4eb36805164a_3.avif",
    place: "Santa Monica",
    country: "Los Angeles, USA",
    link: "https://aviasales.tpo.lu/8nObh6vx",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a1cf52476cc1cc81edf_4.avif",
    place: "New York",
    country: "New York City, USA",
    link: "https://aviasales.tpo.lu/tj5PoFp6",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a25b9cfad9303527f35_5.avif",
    place: "Las Vegas",
    country: "Nevada, USA",
    link: "https://aviasales.tpo.lu/XA5hiF7E",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a2d14b7248968d750e3_6.avif",
    place: "Miami",
    country: "Florida, USA",
    link: "https://aviasales.tpo.lu/B3vAUOOU",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a363a8ae770ec4b98bd_7.avif",
    place: "Banff National Park",
    country: "Alberta, Canada",
    link: "https://aviasales.tpo.lu/9PvFEtGL",
    price: "from 36€",
  },
  {
    id: "north america",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67227a3ef512dbbbede743dc_8.avif",
    place: "Cancun",
    country: "Quintana Roo, Mexico",
    link: "https://aviasales.tpo.lu/D5WBVe8X",
    price: "from 36€",
  },{
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228782f19a4142585963f8_1.avif",
    place: "Cappadocia",
    country: "Central Anatolia, Turkey",
    link: "https://aviasales.tpo.lu/aEBt3SLf",
 price: "from 76€",
  },
  {
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6722879b762e885f577860e7_2.avif",
    place: "Side",
    country: "Turkey",
    link: "https://aviasales.tpo.lu/aEBt3SLf",
 price: "from 76€",
  },
  {
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287a5df7fe1b24fc36556_3.avif",
    place: "Antalya",
    country: "Turkey",
    link: "https://aviasales.tpo.lu/aEBt3SLf",
 price: "from 76€",
  },
  {
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287ae1ac31bcf7eea831a_4.avif",
    place: "Majorca",
    country: "Spain",
    link: "https://aviasales.tpo.lu/zHdA9rhB",
 price: "from 76€",
  },
  {
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287b7f8b06e6932beaae0_5.avif",
    place: "Canary Islands",
    country: "Autonomous community of Spain",
    link: "https://aviasales.tpo.lu/zHdA9rhB",
 price: "from 76€",
  },
  {
    id: "europe",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287c059fa1f5a766f5592_6.avif",
    place: "Barcelona",
    country: "Spain",
    link: "https://aviasales.tpo.lu/zHdA9rhB",
 price: "from 76€",
  },
  {
    id: "africa",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287c900cc73b16825b5ed_7.avif",
    place: "Hurghada",
    country: "Egypt",
    link: "https://aviasales.tpo.lu/trxDdfch",
 price: "from 76€",
  },
  {
    id: "africa",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/672287d2e36e4ce374f1adb2_8.avif",
    place: "Soma Bay",
    country: "Egypt",
    link: "https://aviasales.tpo.lu/trxDdfch",
 price: "from 76€",
  }, {
    id: "oceania",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228ba3ffba8669c06fc0a4_1.avif",
    place: "oceania",
    country: "Commonwealth of oceania",
    link: "https://aviasales.tpo.lu/ZIiUvxLJ",
 price: "from 76€",
  },
  {
    id: "oceania",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228bad4685e5ce87a705c3_2.avif",
    place: "Wellington",
    country: "New Zealand",
    link: "https://aviasales.tpo.lu/VZIB2oOe",
 price: "from 76€",
  },
  {
    id: "oceania",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228bb5f975b1a0538616f5_3.avif",
    place: "Aitutaki",
    country: "Cook Islands",
    link: "https://aviasales.tpo.lu/iAPag8nU",
 price: "from 76€",
  },
  {
    id: "oceania",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67228bc79aa66700bba6d7e7_5.avif",
    place: "Tonga",
    country: "Kingdom of Tonga",
    link: "https://aviasales.tpo.lu/ClfNAHtt",
 price: "from 76€",
  },
   {
    id: "south america",
    url: "https://cdn.pixabay.com/photo/2017/04/02/00/02/the-salar-de-uyuni-2194700_960_720.jpg",
    place: "Salar de uyuni,",
    country: "Potosi, Bolivia",
  },
   {
    id: "south america",
    url: "https://cdn.pixabay.com/photo/2013/09/25/22/03/rio-de-janeiro-186492_1280.jpg",
    place: "Rio de Janeiro",
    country: "Brazil",
  },
   {
    id: "south america",
    url: "https://cdn.pixabay.com/photo/2017/06/03/18/51/nature-2369390_1280.jpg",
    place: "Angel Falls",
    country: "Canaima, Venezuela",
  },
   {
    id: "south america",
    url: "https://cdn.pixabay.com/photo/2025/03/23/09/20/galapagos-9488247_960_720.jpg",
    place: "Galapagos Islands",
    country: "Ecuador",
  },
];


  const continents = [
    { country: "North America" },
    { country: "South America" },
    { country: "Asia" },
    { country: "Europe" },
    { country: "Africa" },
    { country: "Oceania" },
  ];

  const [selectedContinent, setSelectedContinent] = useState("north america");

  const filteredImages = images.filter(
    (item) => item.id === selectedContinent
  );

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
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <div className="bg-transparent w-full h-screen overflow-x-hidden">
      <div className="relative top-[20%] px-10 sm:px-15">
        <h1 className="text-3xl sm:text-8xl pb-4 sm:py-5 menu">Destinations</h1>
      </div>

      {/* ===== Horizontal Scroll List ===== */}
      <div className="relative top-[20%]">
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
          {continents.map((continent, index) => {
            const id = continent.country.toLowerCase();
            return (
              <div
                key={index}
                onClick={() => setSelectedContinent(id)}
                className={` px-10 py-4 w-full cursor-pointer transition-all duration-300  ${
                  selectedContinent === id
                    ? "bg-transparent text-black"
                    : "bg-black text-white"
                }`}
              >
                {continent.country}
              </div>
            );
          })}
        </div>

        <p className="memo text-2xl m-6 sm:p-5 menu">
          Discover the Wonders of{" "}
          {selectedContinent.charAt(0).toUpperCase() +
            selectedContinent.slice(1)}
        </p>

        {/* ===== Filtered Images Grid ===== */}
        <div className="grid sm:grid-cols-4 gap-4 p-4 sm:p-8">
          {filteredImages.map((n, i) => (
            <div className="card relative overflow-hidden" key={i}>
              <img
                src={n.url}
                alt={n.place}
                draggable={false}
                className="object-cover rounded brightness-80 hover:brightness-90 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute top-0 left-0 w-full p-3 text-white">
                <h1 className="text-sm font-semibold">{n.place}</h1>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                <div className="flex justify-between">
                  <h1 className="text-sm font-semibold">{n.country}</h1>
                  <h1 className="text-sm font-semibold">{n.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Booking />
        <Footer />
      </div>
    </div>
  );
};

export default Destination;
