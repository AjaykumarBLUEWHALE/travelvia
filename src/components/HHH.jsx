import React from 'react'

const HHH = () => {
  return (
    <div>
        <div
        id="page1"
        className="menu ipad left-2.5 sm:left-50"
        style={{
          position: "absolute",
          top: "150px",
          color: "white",
          zIndex: 10,
        }}
      >
        <div className="parent6   gap-0">
          <h1 className="text-2xl sm:p-2 px-4  sm:text-6xl  sm:mb-40">
            Enter a world of <br /> discoveries
          </h1>
    <div className="flex flex-col  ipad-txt sm:mt-0 -mt-19 sm:flex-row justify-between gap-4 sm:gap-[600px] items-start w-full px-4">
  {/* LEFT SECTION */}
  <div className="sm:w-[45%] w-full px-2">
    <p className="text-sm sm:text-[10px] w-full sm:w-[150px]">
      Behind every door lies a world of endless possibilities. 
      <span className="font-semibold"> Travel Next Level </span>
      takes you to hidden gems, uncharted territories, and unforgettable 
      adventures that transcend the ordinary.
    </p>
    <button className="rounded bg-white text-black w-[100px] h-[40px] mt-3">
      Discover
    </button>
  </div>

  {/* RIGHT SECTION */}
  <div className="flex flex-row  justify-between gap-2 items-center w-full  rounded">
    <div className='p-2'>
      <img
      loading="lazy"
      className="h-[150px] object-cover sm:w-[150px]  rounded"
      src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/672b9a1566cd01e4423a0643_latest-blog.avif"
      alt="villa"
    />
    </div>
    <div className="flex bg-amber-50 h-[150px] flex-col justify-center w-full sm:p-2 p-1 text-[15px] text-black">
      <h1 className="font-semibold">10 luxurious holiday destinations</h1>
      <p className="text-sm underline cursor-pointer">read more</p>
      <h1 className="mt-2 font-semibold">travel guides</h1>
      <p className="text-sm underline cursor-pointer">read more</p>
    </div>
  </div>
</div>


        </div>
      </div>
      <div
        id="page2"
        className="menu ipad left-[10px] sm:left-50"
        style={{
          position: "absolute",
          top: "150vh",
          color: "white",
          fontSize: "2rem",
          zIndex: 10,
        }}
      >
<h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">A Window to
New Adventures</h1>
<p className="w-[150px] text-[10px]">The path to discovery is limitless, offering views of landscapes yet to be explored. Every journey starts with curiosity, and Travel Next Level is here to turn that curiosity into unforgettable experiences.</p>
      </div>
      <div
        id="page3"
          className="menu ipad2 left-[10px] sm:left-120"
        style={{
          position: "absolute",
          top: "300vh",
   
          color: "white",
          fontSize: "2rem",
          zIndex: 10,
        }}
      >
   <h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">Where the Sky
Meets the Earth</h1>
<p className="w-[150px] text-[10px]">Travel to places where nature’s beauty and human wonder come together in perfect harmony. Let your curiosity guide you to new heights, where unforgettable experiences and breathtaking destinations await.</p>
  
      </div>
    </div>
  )
}

export default HHH
