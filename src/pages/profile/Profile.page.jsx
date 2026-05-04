import React from 'react'
import ProfileUpperSection from './ProfileUpperSection.component.jsx'
import ProfileLowerSection from './ProfileLowerSection.component.jsx'
import StoryHighlightBanner from '../../components/StoryHighlightBanner.component.jsx'

const Profile = () => {
  return (
    <div className='lg:flex lg:gap-4'>
      <div className='lg:h-screen'>
        <div>
          <ProfileUpperSection/>
        </div>
        <div className='mt-20'>
          <StoryHighlightBanner/>
        </div>
      </div>
      <div>
        <ProfileLowerSection/>
      </div>
    </div>
  )
}

export default Profile