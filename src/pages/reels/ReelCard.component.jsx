import { Forward, Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import reel from '../../assets/reel.mp4'

const ReelCard = () => {
  return (
    <div className='flex flex-col justify-center h-full snap-start'>
        <video className='w-full aspect-9/16 z-0 rounded' src={reel} autoPlay loop/>
        <div className='z-10 absolute bottom-20 p-4 flex justify-between items-end w-full'>
            <div className='flex gap-4 items-center'>
                <img className='w-10 aspect-square rounded-full' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4870.jpg?w=360" alt="avtar" />
                <div className='text-white' >@tanujkhedar</div>
                <button className='text-white border-2 border-purple-600 rounded-xl py-1 px-2' >Follow</button>
            </div>
            <div className='flex flex-col gap-8'>
                <Heart color='white'/>
                <MessageCircle color='white'/>
                <Forward color='white'/>
            </div>
        </div>
    </div>
  )
}

export default ReelCard