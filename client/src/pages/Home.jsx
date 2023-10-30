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
      <br />
      <div className='text-center'>
        <p className='font-montserrat  text-white tracking-widest text-shadow text-sm sm:text-lg'>Welcome, Please Log in to Continue!</p>
      </div>
      </div>
    </div>
    </div>
  
  );
}
