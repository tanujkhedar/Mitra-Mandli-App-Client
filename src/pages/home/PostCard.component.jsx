import { Bookmark, Forward, Heart, MessageCircle } from 'lucide-react'
import { api } from '../../app/Api'
import { useEffect, useState } from 'react'

const PostCard = ({owner_id, timeAgo, title, postImage, likeCount, commentCount }) => {

    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        (async () =>  {
            try {
                const response = await api.get(`/user/get/id/${owner_id}`);
                const { userName, avatar } = response.data.data;
                setUserName(userName);
                setAvatar(avatar);
            } catch (error) {
                console.error('Error fetching post owner data:', error);
            }
        })(); 
    }, [owner_id]);

  return (
    <div className='
    mx-4 
    mt-4 
    shadow-xl
    border
    border-gray-300 
    rounded-xl 
    p-4'>
        <div className='flex'>
            <img className='
            w-12 
            rounded-full' 
            src={avatar.url} 
            alt="avtar" />
            <div className='mx-4'>
                <div className='font-semibold'>
                    {userName}
                </div>
                <div className='text-gray-500'>
                    {timeAgo}
                </div>
            </div>
        </div>
        <div className='my-4'> {title}</div>
        <img className='
        rounded-xl 
        mx-auto 
        h-auto 
        max-h-[80dvh] 
        object-contain' 
        src={postImage} 
        alt="post img"  />
        <div className='flex justify-around mt-4'>
            <button className='flex gap-4'>
                <Heart color='gray'/>
                <span>{likeCount}</span>
            </button>
            <button className='flex gap-4'>
                <MessageCircle color='gray'/>
                <span>{commentCount}</span>
            </button>
            <button className='flex gap-4'>
                <Forward color='gray'/>
            </button>
            <button>
                <Bookmark color='gray'/>
            </button>
        </div>
        <div></div>
    </div>
  )
}

export default PostCard