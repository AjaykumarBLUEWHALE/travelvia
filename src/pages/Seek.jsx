import React from 'react';

const Seek = () => {
  return (
    <div className="bg-transparent w-full h-screen overflow-x-hidden">
      <div className="relative top-[20%] px-10 sm:px-16 ">
        <input
          type="text"
          placeholder="Search"
          name="Search"
          aria-label="Search" 
          className="border-b w-full text-7xl menu text-black focus:outline-none py-2"
        />
      </div>
    </div>
  );
};

export default Seek;
