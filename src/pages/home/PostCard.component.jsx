import { Bookmark, Forward, Heart, MessageCircle } from 'lucide-react'
import { api } from '../../app/Api'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import profile from '../../assets/profile.jpg'

const PostCard = ({ timeAgo, title, postImage, likeCount, commentCount, post_id, avatar, userName }) => {

    const [isSaved, setIsSaved] = useState(false);
    const {user} = useSelector((state)=>state.auth);
    const [isLiked, setIsLiked] = useState(false);

    const handleSavePost = async () => {
        try {
            const response = await api.patch('/collection/update', {post_id});
            console.log("updateCollection:- ", response.data.data);
            
            response.data.data ? setIsSaved(true) : setIsSaved(false)
        } catch (error) {
            console.log("axios collection api error:- ", error.response.data.message);
            
        }
    }

    const handleLikePost = async () => {
        try {
            const response = await api.patch('/like/update', {post_id});
            console.log("updateCollection:- ", response.data.data);
            
            response.data.data ? setIsLiked(true) : setIsLiked(false)
        } catch (error) {
            console.log("axios like api error:- ", error.response.data.message);
            
        }
    }

    useEffect(() => {
        (async () =>  {
            try {
                const response = await api.get(`/collection/ispostsave/${post_id}`);
                console.log("getIsSaved:- ", response.data.data);
                
                if (response.data?.data){
                    setIsSaved(true);
                } else {
                    setIsSaved(false)
                }
            } catch (error) {
                console.error('Error fetching post save data:', error);
            }
        })(); 

        (async () =>  {
            try {
                const response = await api.get(`/like/ispostliked/${post_id}`);
                console.log("getIsLiked:- ", response.data.data);
                
                if (response.data?.data){
                    setIsLiked(true);
                } else {
                    setIsLiked(false)
                }
            } catch (error) {
                console.error('Error fetching post like data:', error);
            }
        })(); 
    }, [post_id]);

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
            src={avatar?.url || profile} 
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
            <button className='
            flex 
            gap-4
            cursor-pointer
            hover:text-violet-400
            focus:text-violet-700'
            onClick={handleLikePost}>
                <Heart 
                color={isLiked ? "violet" : "gray"}
                fill={isLiked ? "violet" : "white"}/>
                <span>{likeCount}</span>
            </button>
            <button className='flex gap-4'>
                <MessageCircle color='gray'/>
                <span>{commentCount}</span>
            </button>
            <button className='flex gap-4'>
                <Forward color='gray'/>
            </button>
            <button className='
            cursor-pointer
            hover:text-violet-400
            focus:text-violet-700' 
            onClick={handleSavePost}>
                <Bookmark 
                fill={isSaved ? "violet" : "white"} 
                color={isSaved ? "violet" : "gray"}/>
            </button>
        </div>
        <div></div>
    </div>
  )
}

export default PostCard