import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-5 justify-between top-0 bg-custom-blue h-20 w-full fixed">
      <img src="logo.svg" alt="FitHeal text" />
      <div className="flex">
        <Link to="/">
          <img className="w-20" src="home.svg" alt="Home" />
        </Link>
        <Link to="/login">
          <img className="w-20" src="login.svg" alt="Person" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
