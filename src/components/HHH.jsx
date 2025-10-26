import React from 'react'

const HHH = () => {
  return (
    <div>
        <div
        id="page1"
        className="menu left-[10px] sm:left-50"
        style={{
          position: "absolute",
          top: "150px",
          color: "white",
          zIndex: 10,
        }}
      >
        <div className="parent6">
          <h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">
            Enter a world of discoveries
          </h1>
          <div className="sm:flex flex-row gap-[600px]">
            <div>
              <p className="w-[150px] text-[10px]">
                Behind every door lies a world of endless possibilities. *Travel
                Next Level* takes you to hidden gems, uncharted territories, and
                unforgettable adventures that transcend the ordinary.
              </p>
              <button className="rounded bg-white text-black w-[100px] h-[40px]">
                Discover
              </button>
            </div>

            <div className="parent7 ml-0 sm:mt-0 mt-9">
              <img
                className="h-[170px] mt-[-10px] w-50 p-2 rounded-2xl"
                src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/672b9a1566cd01e4423a0643_latest-blog.avif"
                alt="villa"
              />
              <div className="sm:w-50 w-40 text-[15px] h-[150px] bg-amber-50 text-black rounded-2xl p-2">
                <h1>10 luxurious holiday destinations</h1>
                <h1>read more</h1>
                <h1 className="mt-2">travel guides</h1>
                <h1>read more</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="page2"
        className="menu left-[10px] sm:left-50"
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
          className="menu left-[10px] sm:left-120"
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
