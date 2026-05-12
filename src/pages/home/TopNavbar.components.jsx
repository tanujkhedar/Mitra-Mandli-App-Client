import { Bell, Search } from 'lucide-react'
import app_logo from '../../assets/Mitra_Mandli_App_Logo.png'
import profile from '../../assets/profile.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/logout.api';

const TopNavbar = () => {

  const {user} = useSelector((state) => state.auth);
  const [isViewProfileNavbar, setIsViewProfileNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewProfile = () => {
    navigate('/profile')
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='
    h-full 
    flex 
    justify-between 
    items-center 
    border-b 
    border-gray-300 
    bg-white shadow 
    lg:shadow-[0]'>
        <div className='
        m-4 
        flex 
        items-center'>
            <img className='w-40' 
            src={app_logo} 
            alt="App Logo" />
        </div>
        <div className='m-4 flex'>
            <button className='
            cursor-pointer
            hover:text-violet-400
            focus:text-violet-700'><Search/></button>
            <button className='
            mx-4
            cursor-pointer
            hover:text-violet-400
            focus:text-violet-700'><Bell/></button>
            <img className='
            w-10 
            aspect-square 
            rounded-full
            cursor-pointer'
            onClick={() => {setIsViewProfileNavbar((prev) => !prev)}}
            src={user?.avatar?.url || profile} />

            {
              isViewProfileNavbar && <div className='
              fixed
              top-20
              right-0
              bg-violet-200
              z-50
              p-2
              flex
              flex-col
              rounded-b-xl'>
                <button className='
                p-1
                cursor-pointer
                bg-violet-600
                hover:bg-violet-400
                focus:bg-violet-700
                rounded-xl'
                onClick={handleViewProfile}>view Profile</button>
                <button className='
                p-1
                mt-2
                cursor-pointer
                bg-violet-600
                hover:bg-violet-400
                focus:bg-violet-700
                rounded-xl'
                onClick={handleLogout}>Logout</button>
              </div>
            }
        </div>
    </div>
  )
}

export default TopNavbar