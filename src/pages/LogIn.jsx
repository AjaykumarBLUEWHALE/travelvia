import React from 'react'
import { Link } from 'react-router-dom'
const LogIn = () => {
  
  return (
    <div className="bg-transparent  overflow-x-hidden menu ">
      <div className="relative  grid grid-cols-2   ">
    <div className="hidden sm:block">
  <video
    src="/video/back.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[100vh] object-cover"
  ></video>
</div>

      <div className='bg-black  w-[100vw] h-screen sm:w-full text-white'>
        <div className='relative m-8 px-8 top-[20%]'>
  <div className='flex gap-6 p-2 text-5xl w-full'>
  <Link to="/login">&#9679;Log in</Link>
     <Link to="/sign-up" className='opacity-70'>&#9679;Sign up</Link>
        </div>
       <div className=" grid sm:grid-cols-2 gap-4 w-full    ">
      <div className='grid grid-cols-1'><label class="lb" for="nome">Eamil</label>
        <input type="email" className='bg-black  rounded text-white mt-2 border-1 border-gray-400 p-2 ' placeholder='Enter Your Email' id="userEmail" name="userEmail" required/>
        </div>
           <div className='grid grid-cols-1'><label class="lb" for="nome">Password</label>
        <input type="email" className='bg-black mt-2  rounded text-white border-1 border-gray-400 p-2 ' placeholder='Enter Your Password' id="userEmail" name="userEmail" required/>
        </div>  </div>
        <button className="rounded bg-white text-black mt-6 w-full h-[45px]  ">
    Log in
      </button>
       <div className="text-center mt-4 space-y-1">
              <p className="text-sm text-gray-600">
               Forgot Your Password?{" "}
                <button
                  type="button"
                
                  className="text-gray-400 hover:underline"
                >
                  Reset here
                </button>
              </p>
              <p className="text-sm text-gray-600">
                Trouble signing up?{" "}
                <span className="text-gray-400 cursor-pointer hover:underline">
               <Link to="/contact">    Contact us</Link>
                </span>
              </p>
            </div>
        </div>
      
      </div>
    </div></div>
  )
}

export default LogIn
