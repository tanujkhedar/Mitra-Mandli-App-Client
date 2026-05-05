import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <div className='flex justify-around p-1 border-t border-gray-300 bg-white shadow'>
      
      <NavLink 
        to='/' 
        end 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-purple-200' : ''}`
        }
      >
        {({isActive}) => (
          <Home color={isActive ? "purple" : "black"} />
        )}
      </NavLink>

      <NavLink 
        to='/reels' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-purple-200' : ''}`
        }
      >
        {({isActive}) => (
          <Video color={isActive ? "purple" : "black"} />
        )}
      </NavLink>

      <NavLink 
        to='/upload' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-purple-200' : ''}`
        }
      >
        {({isActive}) => (
          <Upload color={isActive ? "purple" : "black"} />
        )}
      </NavLink>

      <NavLink 
        to='/message' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-purple-200' : ''}`
        }
      >
        {({isActive}) => (
          <MessageCircleMore color={isActive ? "purple" : "black"} />
        )}
      </NavLink>

      <NavLink 
        to='/profile' 
        className={({isActive}) =>
          `p-3 rounded-full ${isActive ? 'bg-purple-200' : ''}`
        }
      >
        {({isActive}) => (
          <User color={isActive ? "purple" : "black"} />
        )}
      </NavLink>

    </div>
  )
}

export default BottomNavbar