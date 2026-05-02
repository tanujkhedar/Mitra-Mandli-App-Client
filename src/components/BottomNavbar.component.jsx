import { Home, MessageCircleMore, Upload, User, Video } from 'lucide-react'

const BottomNavbar = () => {
  return (
    <div className='flex justify-around p-4 border-t border-gray-300 bg-white shadow'>
        <button><Home/></button>
        <button><Video/></button>
        <button><Upload/></button>
        <button><MessageCircleMore/></button>
        <button><User/></button>
    </div>
  )
}

export default BottomNavbar