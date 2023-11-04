import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/bg.jpg'; 
import logo from '../assets/images/bit.png'


export default function Home() {
  const [formData, setFormData] = useState({});
  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const res = await fetch('api/auth/signup', 
    {
      method: 'POST',
      headers:
      {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${bgImage})`, // Use the imported image
      }}
    >
      <div className="h-screen flex items-center justify-center ">
      {/* Black transparent box with rounded corners */}
      <div className="bg-black bg-opacity-30 rounded-lg px-10 py-0.5 pb-10 backdrop-blur-sm">
      <img src={logo} alt="Bit Logo" width="100" height="100" className="mx-auto my-4"/>
      <h1 className='font-montserrat text-sm sm:text-xl text-white tracking-widest'>BIRLA INSTITUTE OF TECHNOLOGY, DEOGHAR</h1>
      <div className='p-3 max-w-lg mx-auto'>
        <p className='font-montserrat  text-white tracking-widest text-shadow text-sm sm:text-md my-1 mb-4  mx-20'>Welcome, Please Sign Up to Continue!</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
          <input type="username" placeholder='Username' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='username'  onChange={handleChange}/>
          <input type="email" placeholder='Email Address' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='email'  onChange={handleChange}/>
          <input type="password" placeholder='Password' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='password' onChange={handleChange}/>
          <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>Sign up</button>
        </form>
        <div className='flex flex-2 gap-2 text-white my-1 mx-2' >
          <p >Already have an account?</p>
          <Link to={"/sign-in"}>
            <span className='text-yellow-300 font-semibold'>Sign in</span>
          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
