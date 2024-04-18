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
      <Navbar className="z-40" />
      <div className="flex justify-around overflow-auto p-40 h-screen">
        <div className="flex flex-col gap-20 items-center" style={{ whiteSpace: 'pre-line' }}>
          {filteredExercises.map((desc, index) => (
            <div key={index} className="rounded-lg shadow-xl w-3/4 space-y-36">
              <div className="bg-black rounded-lg text-center h-20">
                <h1 className="font-bold text-4xl text-white">{desc.id}</h1>
              </div>

              <div className="p-10 flex items-center flex-col m-0 gap-5">
                <video className="w-2/3" controls>
                  <source src={desc.link} type="video/mp4" />
                </video>
                <p className="font-bold text-lg" key={index}>
                  {desc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
  );
};

export default Exercise;
