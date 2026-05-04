import React from 'react'

const ProfileUpperSection = () => {
  return (
    <div className='bg-violet-600 w-full h-90 lg:shadow'>
        <div className='bg-white w-full h-80 relative top-30 rounded-t-full flex flex-col items-center gap-4 lg:w-100'>
            <img className='w-30 absolute bottom-60 border-4 border-white rounded-full' src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="avtar" />
            <div className='mt-22 flex flex-col items-center'>
                <div className='font-bold text-xl'>Tanuj Khedar</div>
                <div className='text-gray-600'>@tanujkhedar</div>
            </div>
            <div className='flex w-full justify-around'>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='font-bold text-xl'>48</div>
                    <div className='font-semibold text-gray-700'>Posts</div>
                </div>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='font-bold text-xl'>342</div>
                    <div className='font-semibold text-gray-700'>Follower</div>
                </div>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='font-bold text-xl'>12</div>
                    <div className='font-semibold text-gray-700'>Following</div>
                </div>
            </div>
            <div className='font-medium'>
                Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className='flex justify-around w-full'>
                <button className='w-45 h-13 border border-gray-100 rounded-xl bg-violet-600 text-white font-medium shadow'>Edit Profile</button>
                <button className='w-45 h-13 border border-gray-100 rounded-xl bg-violet-600 text-white font-medium shadow'>Share Profile</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileUpperSection