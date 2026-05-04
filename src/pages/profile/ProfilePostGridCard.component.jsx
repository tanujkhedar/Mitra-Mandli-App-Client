import React from 'react'

const ProfilePostGridCard = ({postImage}) => {
  return (
    <div className='w-1/3'>
        <img className='w-full aspect-square object-cover p-0.5 rounded' src={postImage} alt="post" />
    </div>
  )
}

export default ProfilePostGridCard