import React, { useState } from "react";
import Video from "./Video";

const Prbuttons = ({ example }) => {
  const {
    name,
    description,
    how_it_happens,
    where_it_happens,
    effects,
    symptoms,
    link,
  } = example;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="border-2 border-black rounded-xl p-4 mt-4 ml-6 bg-black hover:scale-110 transform transition duration-400 w-1/5 shadow-2xl z-10 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="tip text-white font-bold text-lg">
        {name} {isHovered}
      </p>
      <div
        className={` duration-500 ease-in-out p-4 border border-white rounded-md bg-black text-white ${
          isHovered ? "h-full relative z-50" : "hidden z-10"
        }`}
      >
        <p>{description}</p>
        <div>
          <p className="text-xs">How it happens: {how_it_happens}</p>
          <p>Where it happens: {where_it_happens}</p>
          <p>Effects: {effects}</p>
          <p>Symptoms: {symptoms}</p>
         {/* <Video url={link}/> */}
         <video controls>
                  <source src={link} type="video/mp4" />
            </video>
        </div>
      </div>
    </div>
  );
};

export default Prbuttons;
