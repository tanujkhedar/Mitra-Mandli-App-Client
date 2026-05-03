import React from 'react'
import ProfilePostGridCard from './ProfilePostGridCard.component.jsx'
import { Bookmark, Film, Grid3X3 } from 'lucide-react'

const ProfileLowerSection = () => {
  return (
    <div>
        <div className='flex justify-around p-4'>
            <button>
                <Grid3X3/>
            </button>
            <button>
                <Film/>
            </button>
            <button>
                <Bookmark/>
            </button>
        </div>
        <div className='flex shrink-0 flex-wrap'>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
            <ProfilePostGridCard/>
        </div>
    </div>
  )
}

export default ProfileLowerSection