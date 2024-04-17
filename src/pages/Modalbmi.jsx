import React from 'react';
import { Link } from 'react-router-dom';
import BMICalculator from './BMICalculator';

function ModalBMI({ isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  if (!isOpen) {
    return null; // If the modal is closed, don't render anything
  }

  return (
    <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-85" onClick={handleOutsideClick}>
      <div className="relative p-4 w-full max-w-2xl "> {/* Increase the max width */}
        <div className="relative rounded-3xl bg-[url('/blur.jpg')] bg-center bg-cover bg-no-repeat backdrop-blur-xl border-white border-4  bg-white bg-opacity-30" style={{ height: '80vh' }}> {/* Increase the height */}
          <div className="p-4 md:p-5 text-center flex flex-col items-center space-y-3.5 ">
            <h3 className="mb-5 text-3xl font-bold text-white">Want to know your BMI?</h3>
            <BMICalculator />
            <Link to="/trial">
            <img src="/arrow.svg" alt="arrow" className="w-12 hover:translate-y-1" />
            </Link>
            {/* Add more categories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBMI;