import React from 'react';
const Button = ({text}) => {
    return (
        <button className="font-lato w-200 h-80 rounded-xl text-2xl font-bold text-white bg-custom-gray border-0 cursor-pointer text-center hover:bg-custom-green">
            {text}
        </button>
    );
};

export default Button;
    
