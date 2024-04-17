import React, { useState } from 'react';
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
    <div>
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl border-4 border-black transition-transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-6">
          <label className="block mb-2 text-black font-bold text-2xl" htmlFor="weight">
            WEIGHT(KG)
          </label>
          <input
            id="weight"
            type="number"
            className="w-full px-3 py-2 border-black rounded-2xl border-4 "
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-black font-bold text-2xl" htmlFor="height">
            HEIGHT(CM)
          </label>
          <input
            id="height"
            type="number"
            className="w-full px-3 py-2 border-4 border-black rounded-2xl"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-white text-2xl border-black border-4 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-2xl "
          onClick={calculate}
        >
          Calculate BMI
        </button>
        <div id="results" className="mt-4 text-center text-2xl text-black font-bold">
          {measure}
        </div>
      </div>
    </div>
   </div>
    </>
  );
};

export default BMICalculator ;
