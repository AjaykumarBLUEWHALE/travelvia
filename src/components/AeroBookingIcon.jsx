import React, { useState, useEffect } from "react";
import TourSlider from './TourSlider';
import useBookingLogic from "../hooks/useBookingLogic";
import Navbar from "./Navbar";
const AeroBookingIcon = () => {
 
    const navIcon =[
        {
        label:"origin",
        type:"text",
    },
     {
        label:"destination",
        type:"text",
    },
     {
        label:"depart date",
      type:"date",
    },
     {
        label:"return date",
         type:"date",
    },
];
 const {
    counts,
    increment,
    decrement,
    options,
    isopen,
    setisopen,
  } = useBookingLogic();
     const imgColor=()=>{
      switch (location.pathname) {
        case "/contact":
        return "black";
              case"/destinations":
        return "black";
         case"/search":
        return "black";
        case"/hotel":
        return "black";
      }};
      const [open, setOpen] = useState(false); 
       // Lock body scroll when sidebar is open
        const [showIcons, setShowIcons] = useState(true); 
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
   // Handles click on the image section
  const handleToggle = () => {
    setOpen(!open);
    setShowIcons(!showIcons); // 👈 Toggles between images and “X”
  };
  return (
    <div className="booking2 ">
      {/* Mobile menu button */}
      <div className="flex justify-center">
        <div className="div2 flex justify-center">
          <div
            onClick={handleToggle}
            style={{ background: imgColor() }}
            className="flex cursor-pointer z-60 justify-center border-2 m-auto py-3 border-white bg-white/30 backdrop-blur-sm shadow-lg rounded-2xl w-[100px] gap-2"
          >
            {showIcons ? (
              <>
     
                <div>
                  <img
                    loading="lazy"
                    className="w-5 h-5"
                    src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/688c70f31bec8c8a29bb9f92_05a3e1dcc27633f30e1a8b45970efc06_airplane_icon_white.svg"
                    alt="plane"
                  />
                </div>
                <div>|</div>
                <div>
                  <img
                    loading="lazy"
                    className="w-5 h-5"
                    src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/688882abf4a771a7d1276ef9_9d95287c717e769d4dce56d31827ee7f_hotel-icon.avif"
                    alt="hotel"
                  />
                </div>
              </>
            ) : (
              // ❌ Show X instead of icons
              <div   className="text-xl">X</div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => {
            setOpen(false);
            setShowIcons(true); // 👈 reset icons when overlay clicked
          }}
          className="fixed inset-0 bg-black/30 "
        ></div>
      )}

      {/* Sidebar */}
   {open && (
  <div
    className={`fixed menu h-[200px] sm:h-[300px] top-[50px] left-1/2 -translate-x-1/2 w-full 
    border-white border bg-white/10 backdrop-blur-sm text-black z-40 rounded-2xl shadow-lg
    animate-[zoomInFromTop_0.5s_ease-out_forwards]`}
  >
      

        <div className='  h-[300px]  p-6 sm:p-4 '>
  <h1 className='text-2xl text-white sm:text-4xl menu my-4 sm:my-8'>find the best filght or hotels</h1>
  <div className="border-white w-[300px] sm:w-full p-2 rounded-2xl bg-white/30 backdrop-blur-sm border">
  <div className="flex justify-between nomenu py-4 w-full " >
  <div className="flex gap-2">
      <img src="/image/pic/gps.png" className="w-7 h-7 " alt="" />
    <h1 className="text-2xl font-bold">viasales</h1>
  </div>
    <h1 className="text-sm p-2 hidden md:block">Cheap flights and airline tickets</h1>
    </div> 
   <div className='grid sm:grid-cols-6 grid-cols-1 gap-0 sm:gap-4 '>
{navIcon.map((n)=>(
 <div className='grid grid-col'><label class="lb text-black" for="nome">{n.label}</label>
<div>    
    
        <input type={n.type} className='bg-white w-full sm:mb-3 py-3 rounded text-black  border border-gray-400 px-2 ' placeholder={n.label} name="userEmail" required/></div>
        </div>
))}
    
    <div className=' rounded-sm '>
        <label class="lb text-black px-3" for="nome">Number of passengers</label>
 <div className="relative w-full   px-2  sm:p-4">
      {/* Dropdown button */}
      <button
        onClick={() => setisopen(!isopen)}
        className="w-full rounded flex justify-between items-center bg-white"
      >
        <div className="flex flex-col text-left p-3 mt-1">
          <span className="font-medium">Number of passengers</span>
        </div>
        <span>{isopen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown menu */}
    {isopen && (
<div className="absolute w-full sm:ml-[-15px] ml-[-5px] px-2 bg-white rounded 
  bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 sm:mb-0">

    {options.map((option) => (
      <div
        key={option.label}
        className="flex justify-between px-2 py-2  border-b cursor-pointer"
      >
        <span>
          <h1>{option.label}</h1>
          <h1 className='opacity-50 text-sm'>{option.sub}</h1>
        </span>

        <span className='flex gap-2'>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent dropdown toggle
              decrement(option.label);
            }}
            className="rounded-[50%] w-[30px] h-[30px] bg-gray-100"
          >-</button>

          <h1 className="px-2">{counts[option.label]}</h1>

          <button
            onClick={(e) => {
              e.stopPropagation();
              increment(option.label);
            }}
            className="rounded-[50%] w-[30px] h-[30px] text-white bg-black"
          >+</button>
        </span>
      </div>
    ))}
       <div className="flex flex-col text-left">
          <span className="font-medium">Class</span>
          <div className='flex justify-between py-3'>
            <h1>Economy</h1>
         <label class="radio-button">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>
          </div>
           <div className='flex justify-between py-3'>
            <h1>Bussines</h1>
       <label class="radio-button">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>
          </div>
        </div>
        <div>

        </div>
  </div>
)}

    </div>

     </div>
<div className="text-white p-2 sm:px-0 sm:py-8 mt-3 cursor-pointer">
  <span
    className="
      bg-blue-300 
      rounded-sm 
      hover:opacity-80 
      p-4 
      w-full 
      sm:w-[200px] 
      sm:h-12
      h-2 
      flex 
      justify-center 
      items-center
      text-center
    "
  >
    Search flights
  </span>
</div>

  </div></div>

</div>
      </div>)}
    </div>
  )
}

export default AeroBookingIcon
