import React from 'react'
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const Hotel = () => {
  const images = [
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f417e434d5a1d5aaa0a7_1.avif",
    place: "Sentido Pearl Beach Kos",
    airport: "Kos International Airport (KGS)",
    price: "€120/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f41fc8e7752fb5ffc1a3_2.avif",
    place: "Siyam World Maldives",
    airport: "Malé-Velana International Airport (MLE/VIA)",
    price: "€904/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f425f55c407131d43616_3.avif",
    place: "137 Pillars Suites & Residences Bangkok",
    airport: "Suvarnabhumi Airport (BKK)",
    price: "€169/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f42bc1850a4d09e66cfc_4.avif",
    place: "Purana Suite Ubud",
    airport: "I Gusti Ngurah Rai International Airport (DPS)",
    price: "€109/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f43bea3b303b3c2a5dca_5.avif",
    place: "Atlantis, The Palm",
    airport: "Dubai International Airport (DXB)",
    price: "€416/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f4451ab3953487b04771_6.avif",
    place: "Wings Cappadocia Hotel",
    airport: "Ankara Esenboga Airport (ESB)",
    price: "€113/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f44dfc99a7d020338780_7.avif",
    place: "Santorini Summer Lovers",
    airport: "Santorini Airport (JTR)",
    price: "€109/Night",
  },
  {
    url: "https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6723f454403fd7c6a5d0efc9_8.avif",
    place: "Ruby Tulum",
    airport: "Cancun International Airport (CUN)",
    price: "€264/Night",
  },
];

  return (
    <div className="bg-transparent w-full h-screen overflow-x-hidden">
      <div className="relative top-[20%] mb-[200px] px-3 sm:px-6 ">
                  <h1 className='  text-6xl sm:text-8xl px-4 sm:px-8 menu'>Hotels</h1>
          <div className="grid sm:grid-cols-4  gap-4 p-4 sm:p-8">
          {images.map((n, i) => (
            <div className="card relative overflow-hidden" key={i}>
              <img
               loading="lazy"
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
                  <h1 className="text-sm font-semibold">{n.price}{n.airport}</h1>

                </div>
              </div>
            </div>
          ))}
        </div>
       
    </div>
     <Booking/>
        <Footer/>
    </div>
  )
}

export default Hotel
