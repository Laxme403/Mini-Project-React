import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component
import './ind.css';

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <div className="bg-black flex h-screen w-screen p-10">
        <div className=" text-white flex flex-rowp-10 bg-black h-full w-1/2">
          <div className="">
            <img src="/logonew.svg" alt="logo" className="w-60 h-60" />
            <h1 className="font-bold text-9xl ">FitHeal</h1>
            <div className="flex flex-row pt-10 pb-10 justify-center">
              <h1 className="font-bold text-xl ">
                Your ultimate companion to Fitness and Relief
              </h1>
            </div>
            <button className="bg-white w-36 h-8 text-black font-bold text-xl rounded-3xl hover:bg-black hover:text-white ">
              Join Us
            </button>
          </div>
          <div className="text-4xl font-bold px-36 space-y-28">
        
            <div  className="hover:animate-bounce">
              <h1>
                Tailored<br></br>Workout<br></br>Routines
              </h1>
            </div>
            <h1 className="hover:animate-bounce">
              Effective <br></br>Pain<br></br> Relief
            </h1>
            <h1 className="hover:animate-bounce">
              Personalised<br></br> Diet<br></br> Plans
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-around bg-black h-full w-1/2 space-y-16 overflow-auto">
            <div onClick={openModal} className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
              <img
                src="/workout-modified.jpg"
                alt="Background Image"
                className="h-full w-full object-cover"
              />
              <span className="card-social  bg-black bg-opacity-45 text-white text-9xl absolute bottom-[25%] left-0 z-20">WORKOUT</span>
            </div>
            <Link to="/pain">
          <div className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
            <img
              src="/Muscle-Pain-modified.jpg"
              alt="Background Image"
              className="h-full w-full object-cover"
            />
            <span className="card-social bg-black bg-opacity-45 text-white text-9xl absolute bottom-[25%] left-0 z-20">PAIN RELIEF</span>
          </div>
          </Link>
          <div className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
            <img
              src="/diet-modified.jpg"
              alt="Background Image"
              className="h-full w-full object-cover"
            />
            <span className="card-social bg-black bg-opacity-45 text-white text-9xl absolute bottom-[25%] left-0 z-20">DIET GENERATOR</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
