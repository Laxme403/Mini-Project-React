import React from "react";
import Navbar from "../components/Navbar";
import Female from "../components/Female";
import Button from "../components/Button";
import ToggleSwitch from "../components/TSwitch";
import { Link } from "react-router-dom";
function Workoutf() {
  return (
    <>
      
      <div className="flex space-x-32 h-[100vh] pt-20 justify-around">
        <div className="p-5">
          <Female />
        </div>
      </div>
    </>
  );
}

export default Workoutf;
