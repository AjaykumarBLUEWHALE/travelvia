import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when sidebar is open
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
  <>
      {/* Mobile menu button */}
              <div className="md:hidden flex">
                <button
                  onClick={() => setOpen(!open)}
                  className="  text-base font-medium "
                >
                  {open ? 'CLOSE' : 'MENU'}
                </button>
              </div>
     {/* Overlay */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed menu top-0 right-0 h-full w-full bg-black text-white  md:hidden z-50 transform transition-all duration-500 ease-in-out origin-right
              ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-90 opacity-0'}`}
          >
            {/* Close button inside sidebar */}
                <div className='flex text-base font-medium justify-start mb-[-50px] m-5 menu'>
        <ul>
          <li>Travel</li>
          <li>Next.Level</li>
        </ul>
   
</div>
                <div class="div2 flex justify-center mb-[-50px] mt-[10px] ">
      <div className='flex justify-center border-2 m-auto  py-3 border-white bg-white/30 backdrop-blur-sm shadow-lg rounded-2xl w-[100px]  gap-2  '>
        <div><img  loading="lazy"  className='w-5 h-5' src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/688c70f31bec8c8a29bb9f92_05a3e1dcc27633f30e1a8b45970efc06_airplane_icon_white.svg" alt="plane" /></div>
        <div >|</div>
      <div><img   loading="lazy"  className='w-5 h-5' src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/688882abf4a771a7d1276ef9_9d95287c717e769d4dce56d31827ee7f_hotel-icon.avif" alt="hotel" /></div>
      </div>
    </div>
     
            <div className="flex justify-end p-2  text-base font-medium ">
              <div className="px-3 py-1">English</div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1"
              >
                CLOSE
              </button>
            </div>

            {/* Sidebar menu items */}
            
            <div className="flex flex-col mt-4 space-y-0 px-4 ">
              <div className="px-3 py-1 text-5xl opacity-50 "><a href="/">Home</a></div>
              <div className="px-3 py-1 text-5xl  "><a href="/destinations">Destinations</a></div>
              <div className="px-3 py-1 text-5xl  "><a href="/hotel">Hotel</a></div>
              <div className="px-3 py-1 text-5xl  "><a href="/partnership">Partnership</a></div>
              <div className="px-3 py-1 text-5xl  "><a href="/blog">Blog</a></div>
              <div className="px-3 py-1  text-5xl "><a href="/contact">Contact</a></div>
           <div className="parent4">
  <div className="px-3 py-1 text-base font-medium opacity-50">
    socials
  </div>
  <div className="px-3 py-1 text-[17px] font-bold">
    <ul>
      <li>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          pinterest
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/zackzyrical/" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@Zackzyrical" target="_blank" rel="noopener noreferrer">
          youtube
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer">
          facebook
        </a>
      </li>
      <li>
        <a href="https://x.com/ZZyrical" target="_blank" rel="noopener noreferrer">
          x
        </a>
      </li>
    </ul>
  </div>
</div>

           <div class="parent5">
<div className='px-3 py-1 text-5xl'><a href="/search"><img  loading="lazy"  src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/671aa53e3d420b8eb1880fc1_search_icon.svg" 
alt="search" /></a></div>
<div className='px-3 py-1 text-5xl'><a href="/search">Search</a></div>
<div className='px-3 py-1 text-5xl'><a href="/login">log in</a></div>
<div className='px-3 py-1 text-5xl'><a href="/sign-up">sign in</a></div>
</div>   
            </div>
          </div>
  </>
  )
}

export default Sidebar
