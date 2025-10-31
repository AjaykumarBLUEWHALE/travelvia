import React from 'react'
import Carousel from './Carousel'
import Read from './Read'

import TourSlider from './TourSlider';
import BookingSidebar from './BookingSidebar';
import useBookingLogic from "../hooks/useBookingLogic"; // ✅ import the hook
const Booking = () => {

const date=[
  {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
  
   {
    month:"Octber ",price:"70,000"
  },
   {
    month:"Octber ",price:"70,000"
  },
]
  const {
    counts,
    increment,
    decrement,
    options,
    isopen,
    setisopen,
    value,
    setValue,
  } = useBookingLogic();

  return (
    <div>


<div className='grid grid-rows-1 gap-[0px] bg-[url(/image/pic/back.jpg)] sm:grid-rows-[300px_auto] '>
<div className=' w-full h-[300px] p-8'>
  <h1 className='text-2xl sm:text-4xl menu my-4 sm:my-8'>find the best filght or hotels</h1>
  <div className='grid sm:grid-cols-4 grid-cols-1  gap-2 '>
    <div className='bg-white rounded-sm  flex justify-between ' >
      <input className='w-1/2  py-3 text-center' type="text" id="username" name="place" placeholder="Destination from" required/>
        <input className='w-1/2 py-3 text-center' type="text" id="username" name="palce2" placeholder="Arrival in" required/>
    </div>
    <div className='bg-white flex justify-between  rounded-sm p-0'>
 <input
      type={value ? "datetime-local" : "text"} // show text when empty
      className="w-1/2 p-3 text-center  rounded "
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Depart"
      onFocus={(e) => e.target.type = "datetime-local"}
      onBlur={(e) => { if (!value) e.target.type = "text"; }}
    /> <input
      type={value ? "datetime-local" : "text"} // show text when empty
      className="w-1/2 p-3 text-center  rounded "
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Return"
      onFocus={(e) => e.target.type = "datetime-local"}
      onBlur={(e) => { if (!value) e.target.type = "text"; }}
    />
    </div>
    <div className='bg-white rounded-sm '>
 <div className="relative w-full h-full px-2 py-1 sm:p-4">
      {/* Dropdown button */}
      <button
        onClick={() => setisopen(!isopen)}
        className="w-full rounded flex justify-between items-center bg-white"
      >
        <div className="flex flex-col text-left">
          <span className="font-medium">Number of passengers</span>
          <span className="text-sm text-gray-500">Business</span>
        </div>
        <span>{isopen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown menu */}
    {isopen && (
  <div className="absolute w-full ml-[-15px] px-2 mt-7 bg-white rounded">
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
    <div className='bg-black text-white rounded-sm p-3 sm:p-5 cursor-pointer'> <span className='hover:opacity-80'>Search flights</span> </div>
  </div>
  <h1 className='text-base sm:my-8 my-2 border-b uppercase p-2 sm:py-4 '>create multi-city route</h1>
</div>
<div className=' w-full h-[500px] p-8'>
  <div className='grid sm:grid-cols-[300px_auto] mt-12 sm:mt-2 grid-cols-1 h-[400px] sm:h-full   '>
    <div className='bg-white/50  sm:border-r-0 border-b-0 border border-white rotate-xl sm:rounded-l-xl'>
  <div className='mobile flex flex-col gap-3 px-4 py-4 w-full'>
     <input className='  py-3 bg-white text-center rounded' type="text" id="username" name="place" placeholder="City" required/>
        <input className=' py-3 bg-white text-center rounded' type="text" id="username" name="palce2" placeholder="City" required/>
      <div className='flex  py-3'>
        
         <label className="radio-button ">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>    <h1>Economy</h1>
          </div>   
          <div className='flex  py-3'>
          
         <label class="radio-button">
    <input type="radio" name="option" value="option1"/>
    <div class="radio-circle"></div>
    
  </label>  <h1>Economy</h1>
          </div>
      <TourSlider/>



  </div>
<BookingSidebar/>
    </div>
    <div className='bg-white/50 sm:border border border-white  rotate-b-xl sm:rounded-r-xl'>
    <div class="parent9 w-full h-full cursor-pointer  text-ceter p-8">
  {date.map((d)=>(
  <span className={'p-2 sm:p-4 text-center bg-gray-200  hover:bg-black hover:text-white rounded '}>
    <h1 className= 'text-[10px] sm:text-sm'>{d.month}</h1>
  <h2 className='sm:text-xl'>{d.price}</h2>
  </span>
  ))}


</div>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Booking
