import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
function Template() {
return (
    <>
        <Navbar />
        <div className="flex flex-col justify-around pt-60 w-screen h-screen ">
            <div className="box  flex text-2xl bg-white w-1/5 h-full text-black font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-4 hover:shadow-xl  border-0">
                <div className="radio-buttons ">
                    <input type="radio" name="option1" className="mr-2 large-radio" /> Dumbbell<br />
                    <input type="radio" name="option1" className="mr-2" /> Machine<br />
                    <input type="radio" name="option1" className="mr-2" /> Kettlebells<br />
                    <input type="radio" name="option1" className="mr-2" /> Cables<br />
                    <input type="radio" name="option1" className="mr-2" /> Plate<br />
                    <input type="radio" name="option1" className="mr-2" /> Yoga<br />
                    <input type="radio" name="option1" className="mr-2" /> Vitruvian<br />
                    <input type="radio" name="option1" className="mr-2" /> Smith Machine<br />
                </div>
                <div className="radio-buttons ">
                    <input type="radio" name="option2" className="mr-2" /> Barbell<br />
                    <input type="radio" name="option2" className="mr-2" /> Medicine Ball<br />
                    <input type="radio" name="option2" className="mr-2" /> Stretches<br />
                    <input type="radio" name="option2" className="mr-2" /> Band<br />
                    <input type="radio" name="option2" className="mr-2" /> TRX<br />
                    <input type="radio" name="option2" className="mr-2" /> Bosu Ball<br />
                    <input type="radio" name="option2" className="mr-2" /> Cardio<br />
                </div>
            </div>
        </div>
    </>
);
}

export default Template;
