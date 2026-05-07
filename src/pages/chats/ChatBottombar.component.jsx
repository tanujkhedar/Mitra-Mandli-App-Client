import { CirclePlus, Mic } from 'lucide-react'
import React from 'react'

const ChatBottombar = () => {
  return (
    <div className='
    flex 
    gap-4 
    shadow-2xl 
    p-4 
    items-center
    justify-center
    bg-white
    border
    border-gray-300 
    rounded-l-full
    rounded-r-full
    z-50
    '>
        <div>
            <CirclePlus/>
        </div>
        <div className='flex-1'>
            <input 
            className='
            wrap-normal
            w-full
            min-h-10
            rounded-4xl
            border
            border-gray-400'
            type="text" 
            name="" 
            id="" 
            placeholder='Say something'/>
        </div>
        <div>
            <Mic/>
        </div>
    </div>
  )
}

export default ChatBottombar