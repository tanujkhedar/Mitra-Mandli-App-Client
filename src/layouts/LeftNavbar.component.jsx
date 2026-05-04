import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import app_logo from '../assets/app_logo.png'

const LeftNavbar = () => {
  const [isHomeActive, setHomeActive] = useState(false);
  const [isReelsActive, setReelsActive] = useState(false);
  const [isUploadActive, setUploadActive] = useState(false);
  const [isMessageActive, setMessageActive] = useState(false);
  const [isProfileActive, setProfileActive] = useState(false);

  return (
    <div className='bg-white h-dvh p-4 flex flex-col gap-10 shadow mr-4'>
        <img src={app_logo} alt="app logo" />
        <NavLink to='/' end className={({isActive}) => { setHomeActive(isActive); return `px-3 py-8 flex gap-4 rounded-xl  ${isActive ? 'bg-violet-100' : ' '}`}} >
          <Home className={isHomeActive ? "text-violet-700" : "text-black"}/>
          <span className={`${isHomeActive ? "text-violet-700" : "text-black"} font-bold`}>HOME</span>
        </NavLink>
        <NavLink to='/reels' end className={({isActive}) => { setReelsActive(isActive); return `px-3 py-8 flex gap-4 rounded-xl  ${isActive ? 'bg-violet-100' : ' '}`}}>
          <Video className={isReelsActive ? "text-violet-700" : "text-black"}/>
          <span className={`${isReelsActive ? "text-violet-700" : "text-black"} font-bold`}>REELS</span>
        </NavLink>
        <NavLink to='/upload' end className={({isActive}) => { setUploadActive(isActive); return `px-3 py-8 flex gap-4 rounded-xl  ${isActive ? 'bg-violet-100' : ' '}`}}>
          <Upload className={isUploadActive ? "text-violet-700" : "text-black"}/>
          <span className={`${isUploadActive ? "text-violet-700" : "text-black"} font-bold`}>CREATE</span>
        </NavLink>
        <NavLink to='/message' className={({isActive}) => { setMessageActive(isActive); return `px-3 py-8 flex gap-4 rounded-xl  ${isActive ? 'bg-violet-100' : ' '}`}}>
          <MessageCircleMore className={isMessageActive ? "text-violet-700" : "text-black"}/>
          <span className={`${isMessageActive ? "text-violet-700" : "text-black"} font-bold`}>MESSAGE</span>
        </NavLink>
        <NavLink to='/profile' end className={({isActive}) => { setProfileActive(isActive); return `px-3 py-8 flex gap-4 rounded-xl  ${isActive ? 'bg-violet-100' : ' '}`}} >
          <User className={isProfileActive ? "text-violet-700" : "text-black"}/>
          <span className={`${isProfileActive ? "text-violet-700" : "text-black"} font-bold`}>PROFILE</span>
        </NavLink>
    </div>
  )
}

export default LeftNavbar