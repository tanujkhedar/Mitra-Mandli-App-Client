import React from 'react'
import ProfileUpperSection from '../components/ProfileUpperSection.component.jsx'
import ProfileLowerSection from '../components/ProfileLowerSection.component.jsx'
import StoryHighlight from '../components/StoryHighlight.component.jsx'

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileUpperSection/>
      </div>
      <div className='mt-20'>
        <StoryHighlight/>
      </div>
      <div>
        <ProfileLowerSection/>
      </div>
    </div>
  )
}

export default Profile