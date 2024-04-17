import React from "react";
import Navbar from "../components/Navbar";
import Male from "../components/Male";
import Button from "../components/Button";
import ToggleSwitch from "../components/TSwitch";
import { Link } from "react-router-dom";
function Workoutm () {
  return (
    <>
      <Navbar />
      <div className="flex space-x-32 h-[100vh] pt-20 justify-around">
        <div className="p-5">
          <Male />
        </div>
      </div>
    </>
  );
}

export default Workoutm ;
