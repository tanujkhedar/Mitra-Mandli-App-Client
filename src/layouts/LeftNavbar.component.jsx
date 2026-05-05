import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import app_logo from '../assets/app_logo.png'

const LeftNavbar = () => {
  return (
    <div className='bg-white h-dvh p-4 flex flex-col gap-10 shadow mr-4'>
      
      <img src={app_logo} alt="app logo" />

      <NavLink to='/' end className={({isActive}) =>
        `px-3 py-8 flex gap-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Home className={isActive ? "text-violet-700" : "text-black"} />
            <span className={`${isActive ? "text-violet-700" : "text-black"} font-bold`}>
              HOME
            </span>
          </>
        )}
      </NavLink>

      <NavLink to='/reels' className={({isActive}) =>
        `px-3 py-8 flex gap-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Video className={isActive ? "text-violet-700" : "text-black"} />
            <span className={`${isActive ? "text-violet-700" : "text-black"} font-bold`}>
              REELS
            </span>
          </>
        )}
      </NavLink>

      <NavLink to='/upload' className={({isActive}) =>
        `px-3 py-8 flex gap-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Upload className={isActive ? "text-violet-700" : "text-black"} />
            <span className={`${isActive ? "text-violet-700" : "text-black"} font-bold`}>
              CREATE
            </span>
          </>
        )}
      </NavLink>

      <NavLink to='/message' className={({isActive}) =>
        `px-3 py-8 flex gap-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <MessageCircleMore className={isActive ? "text-violet-700" : "text-black"} />
            <span className={`${isActive ? "text-violet-700" : "text-black"} font-bold`}>
              MESSAGE
            </span>
          </>
        )}
      </NavLink>

      <NavLink to='/profile' className={({isActive}) =>
        `px-3 py-8 flex gap-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <User className={isActive ? "text-violet-700" : "text-black"} />
            <span className={`${isActive ? "text-violet-700" : "text-black"} font-bold`}>
              PROFILE
            </span>
          </>
        )}
      </NavLink>

    </div>
  )
}

export default LeftNavbar