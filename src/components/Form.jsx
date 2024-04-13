import * as React from 'react';

export default function From(){
    return(
        <div className='bg-grey-500 px-10 py-20 rounded-3xl border-2 border-black'>
            <h1 className='text-5xl font-semibold'>Welcome! </h1>
            <p className='font-medium text-lg text-black mt-4'>Please Enter your details.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-black rounded-xl p-4 mt-1 bg-grey-200'
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-black rounded-xl p-4 mt-1 bg-yellow-200'
                        placeholder='Enter your password'
                        type='password'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='mt-2 font-medium text-base' for="remember">Remeber Me</label>
                    </div>
                    <button className='font-medium text-base text-blue-600'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.95] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-yellow-500 text-lg font-bold'>Sign in</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>
                        Don't have an account
                    </p>
                    <button className='text-blue-600 text-base font-medium ml-2'>Sign up</button>
                </div>
            </div>
        </div>
    )
}