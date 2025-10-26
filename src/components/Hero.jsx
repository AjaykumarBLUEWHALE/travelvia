import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
  <div className="hero-container">
      <section className="relative w-full  bg-transparent" >
    <div class="sm:flex justify-center items-end p-3 menu mt-[100px]">
<p className=" text-[13px] w-[400px] hidden md:block ">Step into a realm where the extraordinary becomes reality. From hidden valleys to untouched coastlines, these are places that defy imagination and stir the soul. Discover the world’s most remarkable wonders, carefully curated to inspire your next unforgettable journey.</p>
<h1 className="text-[50px] sm:w-[600px] sm:text-8xl p-4">Explore Worlds Beyond Imagination</h1>
<h2 className="opacity-50 sm:px-4 px-7">Drag to navigate</h2>
</div>

<div>
  <Carousel/>
   <div className="sm:flex justify-between p-4 menu items-end ">
          <h1 className='text-[50px] sm:w-[600px] sm:text-8xl px-4 menu'>Latest articles</h1>
         <h2 className="opacity-50 sm:mr-24 sm:px-4 px-7">Drag to navigate</h2>
   </div>
</div>
    </section>
  </div>
  );
};

export default Hero;
