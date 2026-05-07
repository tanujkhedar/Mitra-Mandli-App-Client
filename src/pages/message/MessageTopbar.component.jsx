import { Search } from 'lucide-react'

const MessageTopbar = () => {
  return (
    <div className='
    flex 
    justify-between 
    items-center 
    p-4 
    z-50
    bg-white
    shadow  
    lg:p-6
    border-b
    border-gray-300
    lg:rounded-b-2xl'>
        <div className='font-bold text-3xl text-purple-600'>Chats</div>
        <div>
            <Search/>
        </div>
    </div>
  )
}

export default MessageTopbar