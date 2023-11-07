import React from 'react';
import Header from '../components/Header';
import bgImage from '../assets/images/bg.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Payroll() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${bgImage})`, // Use the imported image
        }}
      >
        <div className="text-white text-md md:text-3xl uppercase font-bold text-center pt-5">
          Salary Management System
        </div>

        <div className="mt-16 flex justify-center space-x-4 px-10 pt-7 ">
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
           <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Faculty Salary</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Responsible for managing payroll, compensation and benefits for faculties.</p>
           <Link to ='/faculty'><button className='mt-16 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
           
        </div>
         
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
            <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Staff Salary </p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Responsible for managing payroll, compensation and benefits for staffs, non teaching staffs, and lab assistants.</p>
           <Link to ='/staff'><button className='mt-3 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
             <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Mess Contractor</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Statement detailing charges for foods or services provided.</p>
           <Link to ='/messcontractor'><button className='mt-16 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
             <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Security Contractor</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Statement detailing charges for security or services provided.</p>
           <Link to ='/security'><button className='mt-8 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        </div>
      </div>
    </div>
  );
}

