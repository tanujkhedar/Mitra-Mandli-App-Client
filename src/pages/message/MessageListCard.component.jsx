import React from 'react'

const MessageListCard = () => {
  return (
    <div className='flex items-center p-4 gap-4 m-4 bg-white rounded-2xl'>
        <img className='w-14 aspect-square rounded-full' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4870.jpg?w=360" alt="avtar" />
        <div className='flex-1'>
            <div className='flex justify-between w-full'>
                <div className='font-semibold'>Tanuj Khedar</div>
                <div className='text-gray-500'>2 hour ago</div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='text-gray-500'>Aur bhai aa gya swad</div>
                <div className='w-6 aspect-square rounded-full bg-purple-600 text-white text-center'>13</div>
            </div>
        </div>
    </div>
  )
}

export default MessageListCard