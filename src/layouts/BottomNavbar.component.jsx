import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const BottomNavbar = () => {
  const [isHomeActive, setHomeActive] = useState(false);
  const [isReelsActive, setReelsActive] = useState(false);
  const [isUploadActive, setUploadActive] = useState(false);
  const [isMessageActive, setMessageActive] = useState(false);
  const [isProfileActive, setProfileActive] = useState(false);

  return (
    <div className='flex justify-around p-1 border-t border-gray-300 bg-white shadow'>
        <NavLink to='/' end className={({isActive}) => { setHomeActive(isActive); return `p-3 rounded-full  ${isActive ? 'bg-purple-200' : ' '}`}} >
          <Home color={isHomeActive ? "Purple" : " black"}/>
        </NavLink>
        <NavLink to='/reels' end className={({isActive}) => { setReelsActive(isActive); return `p-3 rounded-full  ${isActive ? 'bg-purple-200' : ' '}`}}>
          <Video color={isReelsActive ? "Purple" : " black"}/>
        </NavLink>
        <NavLink to='/upload' end className={({isActive}) => { setUploadActive(isActive); return `p-3 rounded-full  ${isActive ? 'bg-purple-200' : ' '}`}}>
          <Upload color={isUploadActive ? "Purple" : " black"}/>
        </NavLink>
        <NavLink to='/message' className={({isActive}) => { setMessageActive(isActive); return `p-3 rounded-full  ${isActive ? 'bg-purple-200' : ' '}`}}>
          <MessageCircleMore color={isMessageActive ? "Purple" : " black"}/>
        </NavLink>
        <NavLink to='/profile' end className={({isActive}) => { setProfileActive(isActive); return `p-3 rounded-full  ${isActive ? 'bg-purple-200' : ' '}`}} >
          <User color={isProfileActive ? "Purple" : " black"}/>
        </NavLink>
    </div>
  )
}

export default BottomNavbar