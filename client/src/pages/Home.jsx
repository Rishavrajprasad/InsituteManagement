import React from 'react'
import bgImage from '../assets/images/bg.jpg'; 
import logo from '../assets/images/bit.png'
const bg= 'https://www.bitmesra.ac.in/UploadedDocuments/user_admindeoghar/Header/Header4852371f5c88441dab8c58e3bf26d9bb_College%20Photo%202.jpg'

export default function Home() {
 
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${bg})`, // Use the imported image
      }}
    >
      <div className="h-screen flex items-center justify-center ">
      {/* Black transparent box with rounded corners */}
      <div className="bg-black bg-opacity-20 rounded-lg px-10 py-0.5 pb-10 backdrop-blur-sm">
      <img src={logo} alt="Bit Logo" width="100" height="100" className="mx-auto my-4"/>
      <h1 className='font-montserrat text-sm sm:text-xl text-white tracking-widest'>BIRLA INSTITUTE OF TECHNOLOGY, DEOGHAR</h1>
      <div className='p-3 max-w-lg mx-auto'>
        <p className='font-montserrat  text-white tracking-widest text-shadow text-sm sm:text-lg my-5 mx-7'>Welcome, Please Log in to Continue!</p>
        <form className='flex flex-col gap-4' >
          <input type="email" placeholder='Username' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='email'/>
          <input type="password" placeholder='Password' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='password'/>
          <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-90'>Sign in</button>
        </form>
      </div>
      </div>
    </div>
    </div>
  
  );
}
