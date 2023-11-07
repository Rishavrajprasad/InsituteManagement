import React from 'react';
import Header from '../components/Header';
import bgImage from '../assets/images/bg.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
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
          Welcome to Birla Institute of Technology, Deoghar
        </div>

        <div className="mt-16 flex justify-center space-x-4 px-10 pt-7 ">
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
           <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Payroll</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Responsible for managing payroll, compensation and benefits for faculties and staff members.</p>
           <Link to ='/salary'><button className='mt-16 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
           
        </div>
         
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
            <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Student Fee </p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Maintains and manages students fee records overseeing payments, billing and finacial transactions related to tuition and other fees.</p>
           <Link to ='/fee'><button className='mt-3 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
             <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Bill</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Statement detailing charges for goods or services provided, indicating the amount owed by an entity.</p>
           <Link to ='/bills'><button className='mt-16 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        <div
           className="card w-full px-5 py-3 bg-opacity-50 bg-black backdrop-blur-sm text-white  hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg"
        >
             <p className='font-montserrat text-sm sm:text-2xl text-white tracking-widest text-center uppercase'>Purchase</p>
           <p className='font-montserrat text-sm sm:text-lg text-white ml-3  px-3 pt-7 '>Purchase refers to the aquisition of goods or services recorded as an expediture.</p>
           <Link to ='/purchase'><button className='mt-16 mb-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md  hover:opacity-80 font-montserrat tracking-widest'>
            Click here!
            </button></Link>
        </div>
        </div>
      </div>
    </div>
  );
}

