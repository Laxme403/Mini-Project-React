import Form from "../components/Form"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';  
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <>
{/* <Navbar /> */}
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <Form/>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-black">
                <div className="size-44 bg-white rounded-full">
                <img src="logo.svg" alt="FitHeal text" />
                </div>
            </div>
        </div>

       </>
    );
};


export default Login;