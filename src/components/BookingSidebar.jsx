import React, { useState, useEffect } from "react";
import TourSlider from './TourSlider';
const BookingSidebar = () => {
      const [open, setOpen] = useState(false);  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
  return (
    <div className='booking'>
     {/* Mobile menu button */}
              <div className="md:hidden flex">
                <button
                  onClick={() => setOpen(!open)}
                  className="  text-base font-medium "
                >
                 <div className="flex gap-3 p-4">
                     <button title="filter" className="">
  <svg viewBox="0 0 512 512" height="1em">
    <path
      d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
    ></path>
  </svg>
</button> <span className="text-start text-sm"> <h1>Delhi,India</h1>
<h2>Round trip,7-14 days</h2></span>
                 </div>
                </button>
              </div>
     {/* Overlay */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/0 bg-opacity-40 md:hidden z-40"
            >


            </div>
          )}
            {/* Sidebar */}
           <div
            className={`fixed menu h-[402px] top-[275px] w-[329px] right-0  bg-black/70 text-white  md:hidden z-50 transform transition-all duration-500 ease-in-out origin-right
              ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-90 opacity-0'}`}
          >
   <button
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white text-2xl float-right"
              >
                X
              </button>
              <div className="p-4">
                <div className="grid grid-rows-1 gap-4">
                    
                  <input className='  py-3 text-black bg-white text-center rounded' type="text" id="username" name="place" placeholder="City" required/>
        <input className=' py-3 bg-white text-black text-center rounded' type="text" id="username" name="palce2" placeholder="City" required/>
    
                </div>
             <div className='flex  py-3'>
        
         <label className="radio-button ">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>    <h1>One way</h1>
          </div>   
            <div className='flex  py-3'>
        
         <label className="radio-button ">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>    <h1>One way</h1>
          </div>   
        <div className="ml-[-60px]">
                <TourSlider/>
        </div>
              </div>
          </div>
    </div>
  )
}

export default BookingSidebar
