import React from 'react'

const StoryHighlightCard = ({avatar, username}) => {
  return (
    <div className='shrink-0 lg:shadow lg:flex lg:items-center lg:gap-4 lg:bg-violet-100 lg:rounded-2xl lg:p-4'>
            <img className='w-20 lg:w-15 aspect-square rounded-full border-3 border-violet-600 p-0.5 m-0.5' src={avatar} alt="story" />
            <div className='text-center text-gray-500 font-medium text-sm lg:font-semibold lg:text-base lg:text-black'>{username}</div>
    </div>
  )
}

export default StoryHighlightCard