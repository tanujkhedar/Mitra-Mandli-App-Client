import { ArrowBigLeft, Phone, Video } from 'lucide-react'
import React from 'react'

const ChatTopbar = () => {
  return (
    <div className='flex justify-between p-4 bg-white shadow lg:rounded-b-2xl'>
        <div className='flex items-center'>
            <ArrowBigLeft/>
        </div>
        <div className='flex gap-4'>
            <img className='w-12 aspect-square rounded-full' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4870.jpg?w=360" alt="avtar" />
            <div>
                <div className='font-semibold'>Tanuj Khedar</div>
                <div className='text-gray-500 font-medium'>Online</div>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <div><Phone/></div>
            <div><Video/></div>
        </div>
    </div>
  )
}

export default ChatTopbar