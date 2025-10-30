import React, { useEffect, useRef } from "react";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Booking from "../components/Booking";
import Footer from "../components/Footer";


const Blog = () => {
useEffect(() => {
  AOS.init();
}, []);
const image = [
  {
    id: "All",
     id2: "Interesting Activities",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec978d428784e17fefad_22.avif",
    place: "Vacation in nature: experience wildlife and culinary delights",
    country: "October 28, 2024",
    link: "https://travelnextlvl.de/blog/vacation-in-nature-experience-wildlife-and-culinary-delights"
  },
  {
    id: "All",
       id2: "Travel Tips",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec8b420cf850294aa828_21.avif",
    place: "Swimming in paradise: swimming with pigs in the crystal clear waters of the Bahamas",
    country: "October 28, 2024",
    link: "https://travelnextlvl.de/blog/swimming-in-paradise-swimming-with-pigs-in-the-crystal-clear-waters-of-the-bahamas"
  },
  {
    id: "All",
       id2: "Interesting Activities",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec74a29ea1a5d1cf26c7_20.jpg",
    place: "Travel to Dubai: top 10 hotels and activities",
    country: "October 28, 2024",
    link: "https://travelnextlvl.de/blog/travel-to-dubai-top-10-hotels-and-activities"
  },
  {
    id: "All",
     id2: "Interesting Activities",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eec5da4a087d96ce807b2_19.avif",
    place: "Pure relaxation: the best wellness destinations in Germany for a relaxing weekend",
    country: "October 28, 2024",
    link: "https://travelnextlvl.de/blog/pure-relaxation-the-best-wellness-destinations-in-germany-for-a-relaxing-weekend"
  },
  {
    id: "All",
       id2: "Interesting Activities",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eebd44fe74399614ea1e7_18.avif",
    place: "Magical holiday destinations that are still undiscovered – hidden gems with Travel Next LvL and CHECK24",
    country: "October 27, 2024",
    link: "https://travelnextlvl.de/blog/magical-holiday-destinations-that-are-still-undiscovered---hidden-gems-with-travel-next-lvl-and-check24"
  },
  {
    id: "All",
      id2: "Travel Guides",
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671eebc531fee82d138ef627_17.avif",
    place: "Crystal clear waters: dream destinations around the world – not just in the Maldives",
    country: "October 27, 2024",
    link: "https://travelnextlvl.de/blog/crystal-clear-waters-dream-destinations-around-the-world---not-just-in-the-maldives"
  }
];


  const continents = [
    { country: "All" },
    { country: "Travel Guides" },
    { country: "Travel Tips" },
    { country: "Cultural Experience" },
    { country: "Interesting Activities" },
   
  ];
   const [selectedContinent, setSelectedContinent] = useState("All");
  
     const filteredImages =
    selectedContinent === "All"
      ? image
      : image.filter((item) => item.id2 === selectedContinent);
  
  const slideIndex = useRef(0);

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex.current++;
      if (slideIndex.current > slides.length) {
        slideIndex.current = 1;
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      if (slides[slideIndex.current - 1]) {
        slides[slideIndex.current - 1].style.display = "block";
        dots[slideIndex.current - 1].className += " active";
      }

      setTimeout(showSlides, 5000); // Change every 2 seconds
    }

    showSlides();
  }, []);
const images =[{
  url:"https://images.pexels.com/photos/356966/pexels-photo-356966.jpeg",
  caption:"The most exotic countries in the world: an adventure beyond the familiar",
  alt:'destination'
},
{
  url:"https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg",
  caption:"Traveling to Bali: top 10 hotels and activities",
  alt:'destination'
},
{
  url:"https://cdn.pixabay.com/photo/2020/11/19/15/32/sculpture-5758884_1280.jpg",
  caption:"The most beautiful places in cultural experience: discover the best travel destinations on CHECK24",
  alt:'destination'
}]
  return (
 <div className="overflow-hidden">
     <div className="w-screen  h-screen overflow-hidden relative">
      {/* Slideshow Container */}
      <div className="slideshow-container w-[100vw] h-full relative sm:left-[-183px] ipad-img">
      {images.map((n, i) => (
  <div key={i} className="mySlides fade absolute w-screen h-full top-0 left-0">
    <img
     loading="lazy" 
      src={n.url}
      alt={n.caption || `slide-${i}`}
      className="w-screen  h-full object-cover zoom-in-out-box brightness-50"
    />

    <div data-aos="fade-up" className="absolute bottom-25 text-start left-1/2 transform -translate-x-1/2 w-[80vw]  text-white font-semibold">
      <span className="sm:text-3xl" >{n.caption}</span>
    </div>
  </div>
))}

       

      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-10 transform -translate-x-1/2 flex space-x-3">
        <span className="dot w-4 h-4 bg-gray-400 rounded-full cursor-pointer"></span>
        <span className="dot w-4 h-4 bg-gray-400 rounded-full cursor-pointer"></span>
        <span className="dot w-4 h-4 bg-gray-400 rounded-full cursor-pointer"></span>
      </div>

      {/* Optional Overlay Text */}
    <div className="absolute bottom-10 right-6 text-[10px] text-white brightness-90 sm:text-sm font-semibold">
           25 OCT 2025
          </div>
 <div className="absolute bottom-49 sm:bottom-45 left-10 sm:left-35 brightness-60 text-white text-sm font-semibold">
          <h1>&#9679;Travel tips</h1>
          </div>
          
   <div className="absolute bottom-14 sm:bottom-10 left-10 sm:left-35 text-white text-[10px] font-semibold">
        <button className="rounded hover:text-white border-white hover:bg-transparent hover:border bg-white text-black w-[140px] h-[45px]  ">
Read it Now
      </button>
          </div>

       
    </div>
    <section>
      <h1 className="menu text-6xl mt-8 px-8 py-4">All Articles</h1>
      <div className="flex gap-0 mx-8 sm:w-[580px]">
        {continents.map((continent, index)=>{
            const id = continent.country;
                 return (

        <div
                key={index}
                onClick={() => setSelectedContinent(id)}
                className={` w-full text-[10px] cursor-pointer p-3 transition-all duration-300 ${
                  selectedContinent === id
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
              >
                {continent.country}
              </div>
)})}
      </div>
     
     <div className="grid sm:grid-cols-4 gap-4 p-4 sm:p-8">
          {filteredImages.map((n, i) => (
            <div className="card relative overflow-hidden" key={i}>
              <img
               loading="lazy" 
                src={n.url}
                alt={n.place}
                draggable={false}
                className="object-cover  rounded brightness-80 hover:brightness-90 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute flex   top-0 left-0 w-50/60 p-3 text-white">
                <button className="bg-stone-200 rounded-l p-2 text-[10px] text-black border-gray-400 border-r">{n.id2}</button>
                 <button className="bg-stone-200 rounded-r p-2 text-[10px] text-gray-400">october 28,2024</button>
              </div>
              <div className="absolute bottom-0 left-0 w-full  text-black">
                <div className="flex justify-between bg-white">
                  <h1 className="text-sm font-semibold">{n.place}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {image.map((a) => (
            <h1 className="text-2xl text-center">{a.info}</h1>
          ))}
        </div>
    </section>
      <section>
            <Booking/>
            <Footer/>
         </section>
 </div>
  );
};

export default Blog;
