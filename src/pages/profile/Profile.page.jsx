import React from 'react'
import ProfileUpperSection from './ProfileUpperSection.component.jsx'
import ProfileLowerSection from './ProfileLowerSection.component.jsx'
import StoryHighlight from '../../components/StoryHighlight.component.jsx'

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