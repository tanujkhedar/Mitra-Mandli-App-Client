import { CheckCheck } from 'lucide-react'
import React from 'react'

const ChatComp = () => {
  return (
    <div className='
    w-2/3 
    rounded-2xl 
    p-4 
    shadow-xl 
    m-4
    border
    border-gray-300'>
        <div className='font-medium'>aur sab badhiya</div>
        <div className='flex gap-4 flex-row-reverse'>
            <div>
                <CheckCheck className='text-gray-500'/>
            </div>
            <div className='text-gray-500'>3 min ago</div>
        </div>
    </div>
  )
}

export default ChatComp