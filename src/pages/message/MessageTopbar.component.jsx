import { Search } from 'lucide-react'
import React from 'react'

const MessageTopbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow lg:rounded-b-2xl lg:p-6'>
        <div className='font-bold text-3xl text-purple-600'>Chats</div>
        <div>
            <Search/>
        </div>
    </div>
  )
}

export default MessageTopbar