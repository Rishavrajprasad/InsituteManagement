import logo from '../assets/images/bit.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import user from '../assets/images/user.png'

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <div>
                <img
                    src={logo} // Replace with the actual path to your image
                    alt="Logo" // Provide an alt attribute for accessibility
                    width={64} // Set the width of the image to 200 pixels
                    height={64} // Set the height of the image to 100 pixels
                    style={{ marginRight: '10px' }}
                />
            </div>
            <span className='text-slate-700 my-auto'>Birla Institute of Technology, Deoghar</span>
            
          </h1>
        </Link>
        
        <ul className='flex gap-5'>
          <Link to='/'>
            <li className='hidden sm:inline text-lg text-slate-700 hover:underline '>
              Home
            </li>
          </Link>
          <Link to='/profile'>
          {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={user} alt='profile' />
            ) : (
              <li className=' text-slate-700 hover:underline'> Profile</li>
            )}
          </Link>
          <Link to='/sign-in'>
            <li className=' text-slate-700 text-lg hover:underline'> Sign out</li>
          </Link>

        </ul>
      </div>
    </header>
  );
}