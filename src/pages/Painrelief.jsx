import React from "react";
import Navbar from "../components/Navbar";
import Prbuttons from "../components/Prbuttons"
import data from "../../public/painrelif.json"

function Workout() {
  return (<>
      <Navbar />
    <div className="flex justify-center items-center mt-5 flex-col">
      <button class="cta ">
  <span>Hover me</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
      <div className="flex  flex-wrap  w-[95vw] h-[100vh] pt-20 justify-evenly items-center">
      {data.map((example, index) => (
        <Prbuttons key={index} example={example} />
      ))}
    </div>
    </div>
    </>
  );
}

export default Workout;
