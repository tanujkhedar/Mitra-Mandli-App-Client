import { Forward, Heart, MessageCircle } from 'lucide-react'
import reel from '../../assets/reel.mp4'
import { useEffect, useState } from 'react'
import { api } from '../../app/Api.js'

const ReelCard = ({owner, video, likeCount, commentCount}) => {

    const [ownerData, setOwnerData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await api.get(`/user/get/id/${owner}`);
                setOwnerData(response.data.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        })();
    }, []);

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
                <img className='w-10 aspect-square rounded-full' src={ownerData?.avatar?.url} alt="avtar" />
                <div className='text-white' >{ownerData?.userName}</div>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReelCard