import React from 'react';
import { Link } from 'react-router-dom';

function Modal({ isOpen, setIsOpen }) {
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
    <>
    <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-85"onClick={handleOutsideClick}>
      <div className="relative p-4 w-full max-w-2xl "> {/* Increase the max width */}
        <div className="relative rounded-3xl bg-[url('/blur.jpg')] bg-center bg-cover bg-no-repeat backdrop-blur-xl border-white border-4  bg-white bg-opacity-30" style={{ height: '96vh' }}> {/* Increase the height */}
          <div className="p-4 md:p-5 text-center flex flex-col items-center space-y-2.5 ">
            <h3 className="mb-5 text-3xl font-bold text-white">Choose your Gender</h3>
            <Link to="/wm">
              <button onClick={closeModal} type="button" className="border-white w-56 rounded-3xl bg-white border-4 hover:border-black hover:translate-y-1">
              <h1 className=" pt-3 font-bold text-black text-3xl">MALE</h1>
                <img src="/man.svg" alt="man" className=""/>
              </button>
            </Link>
            <Link to="/wf">
            <button onClick={closeModal} type="button" className="border-white w-56 bg-white rounded-3xl border-4 hover:border-black hover:translate-y-1">
              <h1 className=" pt-3 font-bold text-black text-2xl">FEMALE</h1>
              <img src="/woman.svg" alt="woman" className="" /> {/* Reduce the size */}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Modal;
