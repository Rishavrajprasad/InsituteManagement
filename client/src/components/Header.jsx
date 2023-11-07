import logo from '../assets/images/bit.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';
export default function Header() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const handleSignOut = async () => {

      try {
        dispatch(signOutUserStart())
        const res = await fetch('/api/auth/signout');
        const data = await res.json();
        if (data.success === false) {
          dispatch(deleteUserFailure(data.message));
          return;
        }
        dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(data.message));
      }
    }
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
          <Link to='/dashboard'>
            <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <p className=' text-slate-700 text-lg hover:underline'>{currentUser.fullname}</p>
            ) : (
              <li className=' text-slate-700 hover:underline'> Profile</li>
            )}
          </Link>
          <span onClick={handleSignOut} className='text-slate-700 text-lg hover:underline'>Sign out</span>
        </ul>
      </div>
    </header>
  );
}
