import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import app_logo from '../assets/app_logo.png'
import { useSelector } from 'react-redux'

const LeftNavbar = () => {

  const {user} = useSelector((state)=>state.auth);

  return (
    <div className=' 
    h-dvh 
    p-4 
    flex 
    flex-col 
    gap-4 
    justify-around 
    items-center 
    shadow 
    border-r 
    border-gray-300'>

      <NavLink to='/' end className={({isActive}) =>
        `p-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Home className={isActive ? "text-violet-700" : "text-black"} />
          </>
        )}
      </NavLink>

      <NavLink to='/reels' className={({isActive}) =>
        `p-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Video className={isActive ? "text-violet-700" : "text-black"} />
          </>
        )}
      </NavLink>

      <NavLink to='/upload' className={({isActive}) =>
        `p-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <Upload className={isActive ? "text-violet-700" : "text-black"} />
          </>
        )}
      </NavLink>

      <NavLink to='/message' className={({isActive}) =>
        `p-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <MessageCircleMore className={isActive ? "text-violet-700" : "text-black"} />
          </>
        )}
      </NavLink>

      <NavLink to={`/profile/${user?.userName}`} className={({isActive}) =>
        `p-4 rounded-xl ${isActive ? 'bg-violet-100' : ''}`
      }>
        {({isActive}) => (
          <>
            <User className={isActive ? "text-violet-700" : "text-black"} />
          </>
        )}
      </NavLink>

    </div>
  )
}

export default LeftNavbar