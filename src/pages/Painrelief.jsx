import React from "react";
import Navbar from "../components/Navbar";
import Prbuttons from "../components/Prbuttons"
import data from "../../public/painrelief.json";

function PainRelief() {
  return (<>
      <Navbar />
    <div className="flex justify-center items-center mt-5 flex-col">
      
      <div className="flex  flex-wrap  w-[95vw] h-[100vh] pt-20 justify-evenly items-center">
      {data.map((example, index) => (
        <Prbuttons key={index} example={example} />
      ))}
    </div>
    </div>
    </>
  );
}

export default PainRelief;