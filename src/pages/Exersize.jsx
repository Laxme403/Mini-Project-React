import React from "react";
import { useParams } from "react-router-dom";
import workoutData from "../../public/workout.json";
import Navbar from "../components/Navbar";
const Exercise = () => {
  const { name } = useParams();
  const filteredExercises = workoutData.filter(
    (exercise) => exercise.muscle === name
  );

  if (!name) {
    return <h1>Exercise ID not found</h1>;
  }

  
  return (
    <>
      <Navbar />
      <div className="flex justify-around p-40 h-full">
        <div className="rounded-lg shadow-xl w-1/2 space-y-36"style={{ whiteSpace: 'pre-line' }}>
          {filteredExercises.map((desc, index) => (
            <div key={index} className="">
              <div className="bg-black rounded-lg text-center h-20">
                <h1 className="font-bold text-4xl text-white">{desc.id}</h1>
              </div>

              <div className="h-[500px] w-full">
                <video className="w-full h-full" controls>
                  <source src={desc.link} type="video/mp4" />
                </video>
                <p className="font-bold text-lg" key={index}>
                  {desc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <div className="flex flex-col justify-around p-40">
              <div className=" fixed grid grid-cols-2 item-center gap-4 box fle text-2xl bg-white p-4 text-black font-bold rounded-xl border-black border-4 " style={{ width: '400px', height: '400px' }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
