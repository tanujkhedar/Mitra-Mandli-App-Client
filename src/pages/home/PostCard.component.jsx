import { Bookmark, Forward, Heart, MessageCircle } from 'lucide-react'

const PostCard = ({username, avatar, timeAgo, title, postImage, likeCount, commentCount, shareCount}) => {
  return (
    <div className='
    mx-4 
    mt-4 
    shadow-2xl
    border
    border-gray-300 
    rounded-xl 
    p-4'>
        <div className='flex'>
            <img className='
            w-12 
            rounded-full' 
            src={avatar} 
            alt="avtar" />
            <div className='mx-4'>
                <div className='font-semibold'>
                    {username}
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
                <span>{shareCount}</span>
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