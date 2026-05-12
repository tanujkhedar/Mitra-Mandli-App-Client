import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {

  const {user} = useSelector((state)=>state.auth);
  return (
    <div className='
    flex 
    justify-around 
    p-1 
    border-t 
    border-gray-300 
    shadow'>
      
      <NavLink 
        to='/' 
        end 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-violet-200' : ''}`
        }
      >
        {({isActive}) => (
          <Home className={isActive ? "text-violet-600" : "text-black"} />
        )}
      </NavLink>

      <NavLink 
        to='/reels' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-violet-200' : ''}`
        }
      >
        {({isActive}) => (
          <Video className={isActive ? "text-violet-600" : "text-black"} />
        )}
      </NavLink>

      <NavLink 
        to='/upload' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-violet-200' : ''}`
        }
      >
        {({isActive}) => (
          <Upload className={isActive ? "text-violet-600" : "text-black"} />
        )}
      </NavLink>

      <NavLink 
        to='/message' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-violet-200' : ''}`
        }
      >
        {({isActive}) => (
          <MessageCircleMore className={isActive ? "text-violet-600" : "text-black"} />
        )}
      </NavLink>

      <NavLink 
        to={`/profile/${user?.userName}`} 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-violet-200' : ''}`
        }
      >
        {({isActive}) => (
          <User className={isActive ? "text-violet-600" : "text-black"} />
        )}
      </NavLink>

    </div>
  )
}

export default BottomNavbar