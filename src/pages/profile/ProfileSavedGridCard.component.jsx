import React, { useEffect } from 'react'
import { api } from '../../app/Api';

const ProfileSavedGridCard = ({media}) => {
 
  
  return (
    <div className=' overflow-hidden'>
      {media?.content?.resourceType == 'image' ? <img
        className='w-full h-full object-cover'
        src={media?.content?.file?.url}
        alt="post"
      /> : <video 
            src={media?.content?.file?.url}
            className='w-full h-full object-cover'
            alt="reels"/> }
    </div>
  )
}

export default ProfileSavedGridCard