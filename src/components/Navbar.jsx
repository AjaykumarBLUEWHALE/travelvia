import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import AeroBookingIcon from './AeroBookingIcon';
export default function Navbar() {

 const location = useLocation();
  const getColor = () => {
    switch (location.pathname) {
      case "/":
        return "white";
        case"/destinations":
        return "black";
      case "/blog":
        return "white";
      case "/contact":
        return "Black";
      case "/about":
        return "purple";
        case"/search":
        return "black";
        case"/partnership":
        return"white";
        case"/login":
        return "white";
         case"/sign-up":
        return "white";
      default:
        return "black";
    }};
  
           const imgBackColor=()=>{
      switch (location.pathname) {
        case "/contact":
        return "invert(1)";
      case"/destinations":
        return "invert(1)";
        case"/search":
        return "invert(1)";
        case"/hotel":
        return "invert(1)";
          }};
  return (
 <div className='navbar  '>

       <div className='bg-transparent'>
      <header className="w-full ">
        <nav className="max-w-8xl  uppercase mx-auto py-2 px-4 sm:px-6 lg:px-8 text-white" >
       
<div class="parent">
    <div style={{ color: getColor() }}  class="div1 bg-transparent">
     <div className='flex sm:justify-between  sm:p-4   text-base font-medium'>
               <div className='flex text-base font-medium justify-start '>
        <ul>
          <li>Travel</li>
          <li>Next.Level</li>
        </ul>
   
</div>
      <div className='hidden md:block'>
        <ul>
          <li>
<Link to="/">Home</Link>
</li>
          <Link to="/blog"><li>Blog
</li></Link>
       <Link to="/contact">   <li>contact</li></Link>
        </ul>
      </div>
        <div className='hidden md:block'>
        <ul>
          <Link to="/destinations"><li>
destinations
</li></Link>
          <Link to="/hotel"><li>hotel
</li></Link>
          <Link to="/partnership"><li>partnership</li></Link>
        </ul>
      </div>
     </div>
    </div>
    <div class="div2 flex justify-center "  >
     <AeroBookingIcon/>
    </div>
    <div style={{ color: getColor() }}  class="  div3   mr-[-20px] bg-transparent py-3">
     <div className='flex sm:justify-between gap-2 p-2 ml-[20px]  text-[13px]'>
       <div className=' text-base   font-medium'>english</div>
        <div className='div4'><Sidebar/></div>
    <Link to="/search"><div className="hidden md:flex items-center gap-2 text-base font-medium">
  <img style={{ filter: imgBackColor() }}
   loading="lazy" 
    src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/671aa53e3d420b8eb1880fc1_search_icon.svg" 
    alt="search icon" 
    className="w-5 h-5"
  />
  <span>seek</span>
</div></Link>

      <div className='hidden md:block  text-base font-medium'><Link to="/login">login</Link></div>
     </div>
    </div>
   
</div>
    


        </nav>
      </header>
    </div>
 </div>
  )
}
