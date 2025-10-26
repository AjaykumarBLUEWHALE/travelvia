import React from 'react'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
const Contact = () => {
  return ( 
    <div className='bg-stone-100 w-full h-[180vh] z-0  '  style={{ position: "relative" }}>
    
     <div className="section mb-100 sm:flex justify-between text-start items-baseline relative top-[20%] px-10 sm:px-15 h-screen">
      <div className="text-container">
        <div className="sticky-text text-start">
          <h1 className='  text-3xl sm:text-8xl pb-4 sm:p-4 menu'>Contact</h1>
       <div className='sm:mt-[200px]'> <h1 className='uppercase opacity-70 menu sm:px-4'>E-mail address
</h1>
<h2 className='menu sm:px-4'>travelnxtlvl@gmail.com</h2>

       <h1 className='uppercase opacity-70 menu sm:px-4'>working hours
</h1>
<h2 className='menu sm:px-4'>Monday - Friday, 10AM - 5PM, CET</h2></div>
        </div>
      </div>

      <div className="image-container  menu ">

 <div className="mx-auto max-w-[432px] bg-stone-100">

  
      <div className="sm:px-4 pt-3 pb-6 space-y-3">
        <div className="space-x-3 sm:flex justify-between ">
            <div className='  w-full'>
               <label className="block mb-2 text-sm font-medium text-gray-900">
          First name*

              </label>
          <input type="text"  className=" w-full rounded text-md px-2 py-2 outline-none bg-gray-200 " />
       </div>  <div className='w-full'>
        <label className="block mb-2 text-sm font-medium text-gray-900">
             
LastName*
              </label>
          <input type="text"  className=" w-full rounded  text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" />
      </div>  </div>
        <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
               Email
              </label>
          <input type="text"  className="w-full  rounded text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" />
        <label className="block mb-2 text-sm font-medium text-gray-900">
         Subject
              </label>
          <input type="text"  className="w-full rounded text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" />
     
        </div>
        <div>
         
        </div>
      
     
     
        <div className="text-start">
         <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" className="w-full rounded text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" rows="10" cols="50" required="">          </textarea>
        </div>
          <button className="rounded bg-black text-white w-full sm:w-[100px] h-[40px]">
                Discover
              </button>
      </div>
    </div>


      </div>
    </div>
  <div className='overflow-hidden'>
      <Booking />
      <Footer/>
  </div>
    </div>
  )
}

export default Contact
