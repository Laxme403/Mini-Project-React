import React, { useState } from 'react';
import axios from 'axios';
const DietPlanForm = () => {
    const [form, setForm] = useState({
        goal: '',
        allergies: '',
        age: '',
        dietary_requirements: '',
        gender: '',
        disease: '',
        location: '',
        calorie:''
    });
    const [result, setResult] = useState(null);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api_key = "AIzaSyCdFds0fUmGD4OCLB5Gm9Oz-YT4_x7jNyA";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`;
        const text = `Please provide a personalized diet plan with calorie details based on the following information meeting the calorie requirement:\nLocation: ${form.location}\nAge:${form.age}\nGender: ${form.gender}\nDietary Requirements:${form.dietary_requirements}\nDiseases: ${form.disease}\nGoal: ${form.goal}\nAllergies: ${form.allergies}\nCalories:${form.calorie}\n\nGenerate the diet plan in the following JSON format WITHOUT any additional formatting:\n\n"+"{\n  \"goal\": \"<user's goal>\",\n  \"food_preferences\": \"<user's food preferences>\",\n  \"allergies\": \"<user's allergies>\",\n  \"diet_plan\": {\n    \"breakfast\": [\n      \"<breakfast item 1>\",\n      \"<breakfast item 2>\",\n      \"...\"\n    ],\n    \"lunch\": [\n      \"<lunch item 1>\",\n      \"<lunch item 2>\",\n      \"...\"\n    ],\n    \"dinner\": [\n      \"<dinner item 1>\",\n      \"<dinner item 2>\",\n      \"...\"\n    ],\n    \"snacks\": [\n      \"<snack item 1>\",\n      \"<snack item 2>\",\n      \"...\"\n    ]\n  },\n  \"notes\": \"<any additional notes or recommendations as a single line string>\"\n}\n`;        const payload = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": text
                        }
                    ]
                }
            ]
        };
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.post(url, payload, { headers });
        if (response.status === 200) {
            setResult(JSON.parse(response.data.candidates[0].content.parts[0].text.replace("```json\n", "").replace("\n```", "")));
        } else {
            console.error(`Request failed with status code: ${response.status}`);
        }
    };

    return (
      <>
       <h1 className="font-bold text-black text-5xl m-24 text-center ">DIET GENERATOR</h1>
        <div className="border-8 border-black rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           
            <form onSubmit={handleSubmit}className="grid grid-cols-2 gap-6 flex m-8">

    <label className="flex flex-col font-bold">
      Goal
    <select name="goal" onChange={handleChange} className="border-black border-2 rounded-lg ">
        <option value="">Select...</option>
        <option value="male">Weight Loss</option>
        <option value="female">Weight Gain</option>
    </select>
    </label>
    <label className="flex flex-col font-bold">
        Calories
        <input type="number" className="border-black border-2 rounded-lg" name="goal" onChange={handleChange}  />
    </label>
    <label className="flex flex-col font-bold">
        Allergies
        <input type="text" className="border-black border-2 rounded-lg" name="allergies" onChange={handleChange}  />
    </label>
    <label className="flex flex-col font-bold">
    Age
    <input type="number" min="1" className="border-black border-2 rounded-lg" name="age" onChange={handleChange} />
</label>
    <label className="flex flex-col font-bold">
        Dietary Requirements
        <input type="text" className="border-black border-2 rounded-lg" name="dietary_requirements" onChange={handleChange}  />
    </label>
    <label className="flex flex-col font-bold">
    Gender
    <select name="gender" onChange={handleChange} className="border-black border-2 rounded-lg">
    <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Others</option>
    </select>
</label>
    <label className="flex flex-col font-bold">
        Disease
        <input type="text" className="border-black border-2 rounded-lg" name="disease" onChange={handleChange} />
    </label>
    <label className="flex flex-col font-bold">
        Location
        <input type="text" className="border-black border-2 rounded-lg" name="location" onChange={handleChange}/>
    </label>
    <button type="submit" className="border-black border-4 rounded-3xl text-black font-bold text-2xl hover:bg-black hover:text-white">Submit</button>
</form>
</div>
            {result && <div>{result}</div> &&(
          
          <div className=" w=1/2 ">
        <h1 className="text-5xl font-bold">Diet Plan</h1>
        

        <h2 className="text-center text-5xl font-bold">Meal Plan</h2>
        <div className="flex flex-row space-x-9">
        <div  className="border-4 w-72 font-bold bg-black border-white  bg-black text-white hover:bg-white hover:border-black hover:text-black text-center rounded-xl">
          <h3 className="font-bold text-2xl">Breakfast</h3>
          <ul>
            {result.diet_plan.breakfast.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div  className="border-4 w-72 font-bold bg-black border-white  bg-black text-white hover:bg-white hover:border-black hover:text-black text-center rounded-xl">
          <h3 className="font-bold text-2xl">Lunch</h3>
          <ul>
            {result.diet_plan.lunch.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div  className="border-4 w-72 font-bold bg-black border-white  bg-black text-white hover:bg-white hover:border-black hover:text-black text-center rounded-xl">
          <h3 className="font-bold text-2xl">Dinner</h3>
          <ul>
            {result.diet_plan.dinner.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div  className="border-4 w-72 font-bold bg-black border-white  bg-black text-white hover:bg-white hover:border-black hover:text-black text-center rounded-xl">
          <h3 className="font-bold text-2xl">Snacks</h3>
          <ul>
            {result.diet_plan.snacks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
            </div>
        <p className=" font-bold">
          <strong>Notes:</strong> {result.notes}
        </p>
      </div>
            )}
            
        </>
    );
};

export default DietPlanForm;