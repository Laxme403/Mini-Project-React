import React from "react";
import Navbar from "../components/Navbar";
import Male from "../components/Male";
import Button from "../components/Button";
import ToggleSwitch from "../components/TSwitch";  
import { Link } from "react-router-dom";
function Workout() {
  return (
    <>
      <Navbar />
      <div className="flex space-x-32 h-[100vh] pt-20 justify-around">
        <div className="p-5">
          <Male />
        </div>
        <div>
        <div className="w-1/2">
          <img src="/woman.svg"
                alt="woman"
                className=""/>
        </div>
        <div>
        <img src="/man.svg"
                alt="man"
                className=""/>
        </div>
        </div>
        </div>
      
    </>
  );
}

export default Workout;