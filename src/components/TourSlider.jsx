import React, { useState } from "react";

const TourSlider = () => {
  const [days, setDays] = useState(7); // default start at 7

  const handleChange = (e) => {
    const value = Number(e.target.value);
    // Prevent moving below 7
    if (value < 7) return;
    setDays(value);
  };

  return (
    <div className="flex flex-col items-start gap-4 p-6  w-[250px] mx-auto">
      <h2 className="text-sm font-semibold ">Vaction Duration</h2>

      <div className=" gap-3 w-full">
        <div className="flex justify-between">
          <span className=" text-sm font-medium">From 7 </span>
        <span className="text-sm font-medium">to 16 days</span>
        </div>
        <input
          type="range"
          min="0"
          max="16"
          value={days}
          onChange={handleChange}
          className="w-full accent-black cursor-pointer"
        />
        
      </div>

    
    </div>
  );
};

export default TourSlider;
