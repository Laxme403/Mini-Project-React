import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component
import ModalBMI from './Modalbmi';
import './ind.css';
function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBMIOpen, setIsModalBMIOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalBMI = () => {
    setIsModalBMIOpen(true);
  };
  const closeModalBMI = () => {
    setIsModalBMIOpen(false);
  };

  return (
    <>
      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} closeModal={closeModal} />
      <ModalBMI isOpen={isModalBMIOpen} setIsOpen={setIsModalBMIOpen} />
      <div className="bg-black flex h-full justify around w-screen p-10">
        <div className="fixed text-white flex flex-row  bg-black h-full w-1/2 space-x-20">
          <div className="">
            <img src="/logonew.svg" alt="logo" className="w-60 h-60" />
            <h1 className="font-bold text-9xl ">FitHeal</h1>
            <div className="flex flex-row pt-10 pb-10 justify-center">
              <h1 className="font-bold text-xl ">
                Your ultimate companion to Fitness and Relief
              </h1>
            </div>
            <Link to="/login">
            <button className="bg-white fixed w-44 h-12 text-black font-bold text-2xl rounded-3xl hover:bg-black hover:text-white ">
              JOIN US
            </button>
            </Link>
          </div>
          <div className="text-4xl font-bold space-y-28">
        
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
        <div className="example flex flex-col justify-around bg-black h-full w-1/2 space-y-16 overflow-auto ml-auto">
            <div onClick={openModal} className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
              <img
                src="/workout-modified.jpg"
                alt="Background Image"
                className="h-full w-full object-cover"
              />
              <span className="card-social  bg-black bg-opacity-45 text-white text-9xl absolute bottom-[25%] left-0 z-20">WORKOUT</span>
            </div>
          <div className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
            <img
              src="/Muscle-Pain-modified.jpg"
              alt="Background Image"
              className="h-full w-full object-cover"
            />
            <span className="card-social bg-black bg-opacity-45 text-white text-9xl absolute bottom-[25%] left-0 z-20">PAIN RELIEF</span>
          </div>
          <div  onClick={openModalBMI}  className="relative card flex flex-col card h-96 mr-10 ml-10 rounded-3xl transform hover:rotate-y-180">
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
