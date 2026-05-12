import { Bell, Search, X } from 'lucide-react'
import app_logo from '../../assets/Mitra_Mandli_App_Logo.png'
import profile from '../../assets/profile.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/logout.api';

const TopNavbar = () => {

  const {user} = useSelector((state) => state.auth);
  const [isViewProfileNavbar, setIsViewProfileNavbar] = useState(false);
  const [isShowSearchbar, setIsShowSearchbar] = useState(false);
  const [searchUser, setSearchUser] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewProfile = () => {
    navigate(`/profile/${user?.userName}`);
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  const handleSearchbar = () => {
    setIsShowSearchbar((prev)=>!prev);
  }

  const handleSearchUser = () => {
    if (searchUser.trim()) {
      navigate(`/profile/${searchUser}`);
    }
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
            focus:text-violet-700'
            onClick={handleSearchbar}>{isShowSearchbar ? <X/> : <Search/>}</button>
            {isShowSearchbar && <div className='
            flex
            gap-4
            fixed
            px-2
            top-18
          bg-white
            rounded-2xl
            right-10
            border
            border-gray-300
            md:static
            md:mr-4'>
              <input 
              type='text' 
              placeholder='userName'
              className='
              p-1
              outline-none
              bg-gray-50
              mx-2
              hover:border-violet-300
              focus:border-violet-600'
              onChange={(e)=>{setSearchUser(e.target.value)}}/>
              <button className='
            cursor-pointer
            hover:text-violet-400
            focus:text-violet-700'
            onClick={handleSearchUser}><Search/></button>
            </div>}
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