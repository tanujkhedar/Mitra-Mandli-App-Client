import { Forward, Heart, MessageCircle } from 'lucide-react'
import reel from '../../assets/reel.mp4'

const ReelCard = ({username, avatar, video, likeCount, shareCount, commentCount}) => {
  return (
    <div className='
    flex 
    flex-col 
    justify-center
    items-center
    w-full
    max-w-5xl
    max-h-full
    aspect-9/16 
    snap-start 
    bg-gray-300 
    relative   
    mx-auto'>
        <video className='
        w-full 
        h-full 
        z-0 
        rounded' 
        src={video} 
        controls/>
        <div className='
        z-10 
        absolute 
        bottom-20 
        p-4 
        flex 
        justify-between 
        items-end 
        w-full'>
            <div className='flex gap-4 items-center'>
                <img className='w-10 aspect-square rounded-full' src={avatar} alt="avtar" />
                <div className='text-white' >{username}</div>
                <button className='text-white border-2 border-purple-600 rounded-xl py-1 px-2' >Follow</button>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col items-center text-white'>
                    <Heart color='white'/>
                    <span>{likeCount}</span>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <MessageCircle color='white'/>
                    <span>{commentCount}</span>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <Forward color='white'/>
                    <span>{shareCount}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReelCard