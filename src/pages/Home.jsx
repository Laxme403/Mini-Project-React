import React from "react";
import Navbar from "../components/Navbar";
import Male from "../components/Male";
import Button from "../components/Button";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[100vh] pt-20 justify-around">
        <div className="p-5">
          <Male />
        </div>
        <div className="flex flex-col justify-center space-y-28">
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
}

export default Home;
