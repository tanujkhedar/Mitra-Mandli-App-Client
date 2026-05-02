import { Bell, Search } from 'lucide-react'
import app_logo from '../assets/app_logo.png'

const TopNavbar = () => {
  return (
    <div className='flex justify-between border border-gray-300 bg-white shadow'>
        <div className='m-4 flex items-center'>
            <img className='w-40' src={app_logo} alt="App Logo" />
        </div>
        <div className='m-4 flex'>
            <button><Search/></button>
            <button className='mx-4'><Bell/></button>
            <img className='w-10 aspect-square rounded-full' src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="dumm" />
        </div>
    </div>
  )
}

export default TopNavbar