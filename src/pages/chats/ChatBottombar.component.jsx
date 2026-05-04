import { CirclePlus, Mic } from 'lucide-react'
import React from 'react'

const ChatBottombar = () => {
  return (
    <div className='flex gap-4 bg-white shadow p-4 items-center lg:rounded-t-2xl'>
        <div>
            <CirclePlus/>
        </div>
        <div className='flex-1'>
            <input className='w-full h-9 p-4 border-2 rounded-3xl' type="text" name="" id="" placeholder='something say' />
        </div>
        <div>
            <Mic/>
        </div>
    </div>
  )
}

export default ChatBottombar