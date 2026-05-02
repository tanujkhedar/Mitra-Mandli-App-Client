import React from 'react'
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'
import Rightbar from '../components/RightbarHome'

const Home = () => {
  return (
    <div className='flex w-4/5'>
        <div className='w-[50%] mx-[5%]'>
            <CreatePost/>
            <PostCard/>
            <PostCard/>
        </div>
        <div className='w-[35%] mr-[5%]'>
            <Rightbar/>
        </div>
    </div>
  )
}

export default Home