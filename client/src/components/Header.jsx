import logo from '../assets/images/bit.png';
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-8xl mx-auto p-3 px-10'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex items-center flex-wrap'>
            <img
              src={logo}
              alt='Logo'
              width={64}
              height={64}
              style={{ marginRight: '10px' }} // Adjust the margin to control spacing
            />
            <span className='text-slate-700 my-auto'>Birla Institute of Technology, Deoghar</span>
          </h1>
        </Link>

        <ul className='flex gap-5'>
          <Link to='/'>
            <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
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
            <li className='text-slate-700 text-lg hover:underline'>Sign out</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
