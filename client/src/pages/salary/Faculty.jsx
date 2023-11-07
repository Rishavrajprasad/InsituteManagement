import React from 'react';

import bgImage from '../../assets/images/bg.jpg';
import Header from '../../components/Header';

export default function Faculty() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
        <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${bgImage})`, // Use the imported image
        }}
      >
        <div className="text-white text-md md:text-3xl uppercase font-bold text-center py-5">
          Faculty Salary
        </div>
        <div className='p-3 max-w-lg mx-auto'>
            <form className='flex flex-col gap-4' >
          <input type="text" placeholder='Full Name' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='fname'required/>
          <input type="email" placeholder='Email' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='email'required/>
          <input type="tel" placeholder='Phone Number' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='phone'required/>
          <select id="branchselect" className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none'>
                <option value="" disabled selected>Select Branch</option>
                <option value="cse" id='cse'>Computer Science and Engineering</option>
                <option value="ece" id ='ece'>Electronics & Communication Engineering</option>
                <option value="eee" id ='eee'>Electrical and Electronics Engineering</option>
                <option value="me" id ='me'>Mechanical Engineering</option>
        </select>
        <select id="postselect" className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none'>
                <option value="" disabled selected>Select Position</option>
                <option value="hod" id ='hod'>Head of Department</option>
                <option value="aprof" id ='aprof'>Associate Professor</option>
                <option value="prof" id = 'prof'>Professor</option>
        </select>
        <input type="text" placeholder='Salary Amount' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='salary'required/>
        <select id="month" className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none'>
                
                <option value="" disabled selected>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>

        </select>
        </form>
        <button className='w-full bg-green-700  text-white rounded-lg p-3 my-3 uppercase hover:opacity-95 disabled:opacity-80'>Add to Database</button>
        <button className='w-full bg-slate-700  text-white rounded-lg p-3  uppercase hover:opacity-95 disabled:opacity-80'>Update Details</button>
        </div>
        

        </div>
        </div>
    </div>
  )
}
