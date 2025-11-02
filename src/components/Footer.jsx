import React from 'react'
import myImg from '../assets/qr.jpeg';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    
      <div className="flex flex-col md:flex-row w-full h-auto bg-black text-white menu">
  {/* LEFT SECTION */}
  <div className="w-full md:w-1/2 border-white/50 sm:border-b md:border-b-0 md:border-r px-8 flex flex-col justify-between">
    <div>
      <h1 className="text-3xl mb-10 sm:mb-60 mt-4">Travel destinations</h1>
      <p className="max-w-md leading-relaxed opacity-90">
        Discover the world's most fascinating places, from hidden gems to popular hotspots. 
        Browse our carefully curated selection of destinations that inspire adventure and wanderlust. 
        Start planning your next trip today!
      </p>
    </div>

    {/* Outer red border frame */}
    <div className="mt-5 ml-[-34px] sm:ml-[-36px] border-2 border-r-0 border-white/50 px-8 py-4 w-[102vw] sm:w-[50vw] ">
      <button className="rounded bg-white text-black w-full h-[45px] ">
        Discover
      </button>
    </div>
  </div>

  {/* RIGHT SECTION */}
  <div className="w-full mt-4 md:w-1/2 px-8 flex flex-col justify-between">
    <div>
      <h1 className="text-3xl mb-6">WhatsApp Newsletter</h1>
      <p className="opacity-60 max-w-md leading-relaxed">
        If you are using a mobile device, simply click on the QR code.
      </p>
    </div>

    <div className="mt-10 flex flex-col md:flex-row items-start gap-6">
      <img
       loading="lazy" 
        className="w-40 h-40 object-cover border border-white rounded"
        src={myImg}
        alt="QR"
      />
      <p className="max-w-md leading-relaxed opacity-90">
        Exclusive VIP WhatsApp group to get current travel deals, low-budget, luxury trips, undiscovered secret spots,
        the hottest food trend spots, animal encounters, and inspiration for your next trip. Join now and never miss a thing.
      </p>
    </div>

    {/* Outer red border frame */}
      <div className=" flex flex-col md:flex-row  gap-2 mt-5 ml-[-36px] border-2 border-l-0 border-white/50 px-8 py-4  w-[102vw] sm:w-[50vw] ">
        <input type="email" className='bg-black sm:w-1/2 rounded text-white border-1 p-2 ' placeholder='Enter Your Email' id="userEmail" name="userEmail" required/>
      <button className="rounded bg-white text-black sm:w-1/2 h-[45px] ">
        Discover
      </button>
    </div>
  </div>
</div>

<div className='flex px-4 flex-col md:flex-row w-full h-full bg-black text-white menu'>
 <div>
        
        <h1 className='text-white'>
            
            <div className='grid  cursor-pointer sm:grid-cols-4 grid-cols-2 sm:gap-80 p-4  text-start text-[15px] sm:text-[12px]'>
                <div className=' uppercase '>
                    <h1 className='text-[30px] opacity-75'>discover</h1>
                 <div className='grid grid-cols-2  '>
                    <ul className='text-sm '>
                <Link to="/">  <li>Home</li></Link>
                 <Link to="/blog">
                   <li>blog</li></Link>
                  <Link to="/contact">
                   <li>contact</li></Link>
                
                

                 </ul>
                 
                   </div>
                   
                </div>
                <div> <h1 className='text-[20px] opacity-75 '>travel</h1>
                <ul className='text-sm '>
                  <li><Link to='/destinations'>Travel destinations</Link></li>
                   <li><Link to='/hotel'>hotels</Link></li>
                  </ul>
                </div>
                  <div> <h1 className='text-[20px] opacity-75 '>languages</h1>
                <ul className='text-sm '>
                  <li><a >english</a></li>
                   <li><a >hindi</a></li>

                   </ul>
                </div>
            <div> <h1 className='text-[20px] opacity-75 '>social media</h1>
                <ul className=' text-sm '>
                  <li><a target='blank'>pinterst</a></li>
                   <li><a href="https://www.instagram.com/zackzyrical/" target='blank'>instagram</a></li>
<li><a href="https://www.youtube.com/@Zackzyrical" target='blank'>youtube</a></li>
                   <li><a href="" target='blank'>facebook</a></li>
                   <li><a href="https://x.com/ZZyrical" target='blank'>X</a></li>
                   </ul>
                </div>
            </div>
            <div className='grid sm:grid-cols-4 justify-start sm:gap-80 px-3  grid-cols text-start mt-65    relative'>
              <p className='text-[15px] opacity-75  sm:mb-4'>2025 Ajay  ALL RIGHTS RESERVED</p>
<a to="/tos"><p className='text-[15px]  sm:mb-4 cursor-pointer'>TERMS & CONDITIONS</p></a>
<a to="/privacy"><p className='text-[15px]  sm:-4 cursor-pointer'>PRIVACY POLICY</p></a>
<p className='text-[15px]  mb-4 cursor-pointer'>MADE BY AJAY KUMAR</p>
            </div>
        </h1>
    </div>
</div>



    </div>
  )
}

export default Footer
