import { Bookmark, Forward, Heart, MessageCircle } from 'lucide-react'
import { api } from '../../app/Api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../assets/profile.jpg'
import { updateFollow } from '../../features/follow/updateFollow.api';
import { isFollowingByCurrentUser } from '../../features/follow/isFollowingByCurrentUser.api';
import { Link } from 'react-router-dom';

const PostCard = ({ timeAgo, title, postImage, likeCount, commentCount, post_id, avatar, userName, user_id }) => {

    const [isSaved, setIsSaved] = useState(false);
    const {user} = useSelector((state)=>state.auth);
    const [isFollow, setIsFollow] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

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

        (async()=>{
            const response = await isFollowingByCurrentUser(user_id);
            setIsFollow(response.data);
        })();
    }, [post_id]);

    const handleFollowBtn = async () => {
        const response = await updateFollow(user_id);
        setIsFollow(response.data)
    }

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
                <Link to={`/profile/${userName}`} className='font-semibold'>
                    {userName}
                </Link>
                <div className='text-gray-500'>
                    {timeAgo}
                </div>
            </div>
            {
                (userName != user.userName) && <button className='
                py-1
                px-2
                my-2
                rounded-2xl
                bg-violet-600
                cursor-pointer
                hover:bg-violet-400
                focus:bg-violet-700'
                onClick={handleFollowBtn}>
                    {isFollow ? "Following": "Follow"}
                </button>
            }
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