import React, { useState } from 'react';
import Navbar from "../components/Navbar";
const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [measure, setMeasure] = useState('');
  const [error, setError] = useState('Please enter some values');

  const calculate = () => {
    let bmi;
    if (weight <= 0 && weight>=700 || height <= 0 && height>=300) {
      setMeasure(error);
      return;
    }

    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
      setMeasure(`BMI: ${bmi} [Underweight]`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMeasure(`BMI: ${bmi} [Normal]`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMeasure(`BMI: ${bmi} [Overweight]`);
    } else if (bmi >= 30) {
      setMeasure(`BMI: ${bmi} [Obese]`);
    }
  };

  return (
    <>
    <Navbar/>
    <div>
    <div className="bg-white flex items-center justify-center pt-44">
      <div className="bg-custom-green p-8 rounded-2xl transition-transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-6">
          <label className="block mb-2 text-white" htmlFor="weight">
            WEIGHT(KG)
          </label>
          <input
            id="weight"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-white" htmlFor="height">
            HEIGHT(CM)
          </label>
          <input
            id="height"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-custom-blue hover:bg-custom-green text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600"
          onClick={calculate}
        >
          Calculate BMI
        </button>
        <div id="results" className="mt-4 text-center text-white font-semibold">
          {measure}
        </div>
      </div>
    </div>
   </div>
    </>
  );
};

export default BMICalculator ;
