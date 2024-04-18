import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-5 justify-between top-0 bg-black h-20 w-full fixed">
      <div className="flex flex-col">
      <img src="/logonew.svg" alt="FitHeal text" className="w-12"/><p className="font-bold text-white text-2xl ">FitHeal</p>
      </div>
      <div className="flex">
        <Link to="/">
          <img className="w-20" src="/home.svg" alt="Home" />
        </Link>
        <Link to="/login">
          <img className="w-20" src="/login.svg" alt="Person" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
