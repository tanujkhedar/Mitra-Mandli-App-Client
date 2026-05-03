import React from 'react'
import ReelCard from './ReelCard.component.jsx'

const Reels = () => {
  return (
    <div className='h-full overflow-scroll snap-y snap-mandatory'>
      <div className='h-full relative'>
        <ReelCard/>
      </div>
      <div className='h-full relative'>
        <ReelCard/>
      </div>
      <div className='h-full relative'>
        <ReelCard/>
      </div>
      <div className='h-full relative'>
        <ReelCard/>
      </div>
    </div>
  )
}

export default Reels