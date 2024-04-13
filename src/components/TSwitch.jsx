// ToggleSwitch.jsx
import React, { useState } from 'react';

const ToggleSwitch = ({ offText, onText }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{offText}</span>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={toggleCheck} className="hidden" />
        <span className={`slider ${isChecked ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
      </label>
      <span className="ml-2">{onText}</span>
    </div>
  );
};

export default ToggleSwitch;