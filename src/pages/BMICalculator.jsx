import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [result, setResult] = useState('');

    const calculateBMI = () => {
        // Convert height to meters
        const heightMeters = height / 100;
        // Calculate BMI using the formula: weight (kg) / (height (m))^2
        const calculatedBMI = (weight / (heightMeters * heightMeters)).toFixed(1);
        setBMI(calculatedBMI);

        // Determine BMI category based on calculated BMI value
        let bmiResult = '';
        if (calculatedBMI <= 18.4) {
            bmiResult = "Underweight";
        } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
            bmiResult = "Normal";
        } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
            bmiResult = "Overweight";
        } else if (calculatedBMI >= 30) {
            bmiResult = "Obese";
        }

        setResult(`BMI: ${calculatedBMI} [${bmiResult}]`);
    };

    return (
        <>
            <Navbar />
            <div>
                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <div>{result}</div>
        </>
    );
};

export default BMICalculator;