import React from "react";
import { useParams } from "react-router-dom";
import workoutData from "../../public/workout.json";

const Exercise = () => {
  const { name } = useParams();
  const filteredExercises = workoutData.filter(
    (exercise) => exercise.muscle === name
  );

  if (!name) {
    return <h1>Exercise ID not found</h1>;
  }

  
  return (
    <div>
      <h1>Exercise Page</h1>
      <p>Exercise ID: {name}</p>
      {filteredExercises.map((desc, index) => (
        <p key={index}> Description: {desc.description}</p>
      ))}

      
    </div>
  );
};

export default Exercise;
