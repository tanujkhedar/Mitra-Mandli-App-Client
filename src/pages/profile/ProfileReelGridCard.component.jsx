import React from 'react'

const ProfileReelGridCard = ({reel}) => {
  return (
    <div className='overflow-hidden'>
      <video
        className='w-full h-full object-cover'
        src={reel?.file?.url}
        alt="post"
      />
    </div>
  )
}

export default ProfileReelGridCard