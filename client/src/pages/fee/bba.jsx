import React from 'react';
import { useState } from 'react';
import bgImage from '../../assets/images/bg.jpg';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Bba() {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    
    fname: '',
    email: '',
    phone: '',
    branchselect: '',
    postselect: '',
    salary: 0,
    month: '',
  });
  console.log(formData);
  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (
      e.target.type === 'number' ||
      e.target.type === 'text' ||
      e.target.type === 'textarea'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
        <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${bgImage})`, 
        }}
      >
        <div className="text-white text-md md:text-3xl uppercase font-bold text-center py-5">
          Btech fee payment
        </div>
        <div className='p-3 max-w-lg mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
          <input type="text" placeholder='Full Name' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='fname'onChange={handleChange}
            value={formData.fname}
            required/>
            <input type="text" placeholder='Roll Number' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='roll'onChange={handleChange}
            value={formData.roll}
            required/>
          <input type="email" placeholder='Email' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='email' onChange={handleChange}
            value={formData.email}
            required/>
          <input type="tel" placeholder='Phone Number' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='phone' onChange={handleChange}
            value={formData.phone} required/>
          
        <select id='semester' type='text' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' onChange={handleChange}
            value={formData.semester} required>
                <option value="" disabled selected>Select Position</option>
                <option value="1st" >1st</option>
                <option value="2nd" >2nd</option>
                <option value="3rd" >3rd</option>
                <option value="4th" >4th</option>
                <option value="5th" >5th</option>
                <option value="6th" >6th</option>
        </select>
        <input type="text" placeholder='Fee Payment' className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' id='fee'required
        onChange={handleChange}
        value={formData.fee}/>
        <select id="month" className='border p-1 px-5 rounded-lg opacity-90 focus:outline-none' onChange={handleChange}
            value={formData.month} required>
                
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
        <button disabled={loading} className='w-full bg-green-700  text-white rounded-lg p-3 my-3 uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Adding...' : 'Add to Database'}</button>
        <button className='w-full bg-slate-700  text-white rounded-lg p-3  uppercase hover:opacity-95 disabled:opacity-80'>Update Details</button>
        {error && <p className='text-red-700 text-sm'>{error}</p>}
        </form>
        
        </div>
        

        </div>
        </div>
    </div>
  )
}
