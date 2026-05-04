import React from 'react'
import ProfilePostGridCard from './ProfilePostGridCard.component.jsx'
import { Bookmark, Film, Grid3X3 } from 'lucide-react'

const ProfileLowerSection = () => {

const ownedPosts = [
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "Just now",
    title: "Finally completed my reel page project 🚀",
    postImage: "https://picsum.photos/id/200/600/900",
    likeCount: 45,
    commentCount: 6,
    shareCount: 2
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1 hour ago",
    title: "UI design practice for mobile layout 📱",
    postImage: "https://picsum.photos/id/201/900/600",
    likeCount: 78,
    commentCount: 10,
    shareCount: 4
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "3 hours ago",
    title: "Trying different aspect ratio images",
    postImage: "https://picsum.photos/id/202/600/600",
    likeCount: 30,
    commentCount: 3,
    shareCount: 1
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "5 hours ago",
    title: "Village life 🌾",
    postImage: "https://picsum.photos/id/203/600/900",
    likeCount: 120,
    commentCount: 15,
    shareCount: 5
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "8 hours ago",
    title: "Night coding session 💻",
    postImage: "https://picsum.photos/id/204/900/600",
    likeCount: 65,
    commentCount: 8,
    shareCount: 2
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "12 hours ago",
    title: "Debugging all day 😭",
    postImage: "https://picsum.photos/id/205/600/600",
    likeCount: 40,
    commentCount: 5,
    shareCount: 1
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1 day ago",
    title: "Learning React hooks",
    postImage: "https://picsum.photos/id/206/600/900",
    likeCount: 90,
    commentCount: 12,
    shareCount: 3
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1 day ago",
    title: "Frontend + Backend integration 🔥",
    postImage: "https://picsum.photos/id/207/900/600",
    likeCount: 110,
    commentCount: 14,
    shareCount: 6
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "2 days ago",
    title: "Testing API responses",
    postImage: "https://picsum.photos/id/208/600/600",
    likeCount: 55,
    commentCount: 7,
    shareCount: 2
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "2 days ago",
    title: "Mobile UI improvement 📱",
    postImage: "https://picsum.photos/id/209/600/900",
    likeCount: 75,
    commentCount: 9,
    shareCount: 3
  },

  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "3 days ago",
    title: "Blender practice 🎬",
    postImage: "https://picsum.photos/id/210/900/600",
    likeCount: 130,
    commentCount: 20,
    shareCount: 8
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "3 days ago",
    title: "3D animation test render",
    postImage: "https://picsum.photos/id/211/600/600",
    likeCount: 95,
    commentCount: 13,
    shareCount: 4
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "4 days ago",
    title: "Game dev progress 🎮",
    postImage: "https://picsum.photos/id/212/600/900",
    likeCount: 160,
    commentCount: 25,
    shareCount: 10
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "4 days ago",
    title: "Unity testing scene",
    postImage: "https://picsum.photos/id/213/900/600",
    likeCount: 140,
    commentCount: 18,
    shareCount: 7
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "5 days ago",
    title: "Trying new UI ideas",
    postImage: "https://picsum.photos/id/214/600/600",
    likeCount: 60,
    commentCount: 6,
    shareCount: 2
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "5 days ago",
    title: "Village sunset 🌇",
    postImage: "https://picsum.photos/id/215/600/900",
    likeCount: 200,
    commentCount: 30,
    shareCount: 12
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "6 days ago",
    title: "Workout session 💪",
    postImage: "https://picsum.photos/id/216/900/600",
    likeCount: 85,
    commentCount: 11,
    shareCount: 3
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "6 days ago",
    title: "Healthy lifestyle",
    postImage: "https://picsum.photos/id/217/600/600",
    likeCount: 70,
    commentCount: 9,
    shareCount: 2
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1 week ago",
    title: "First post 🎉",
    postImage: "https://picsum.photos/id/218/600/900",
    likeCount: 300,
    commentCount: 50,
    shareCount: 20
  },
  {
    username: "Tanuj Kumar",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1 week ago",
    title: "Journey begins 🚀",
    postImage: "https://picsum.photos/id/219/900/600",
    likeCount: 250,
    commentCount: 40,
    shareCount: 15
  }
];


  return (
    <div className=' bg-white lg:p-4 lg:shadow'>
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
            {ownedPosts.map((item, i) => <ProfilePostGridCard postImage={item.postImage}/>)}
        </div>
    </div>
  )
}

export default ProfileLowerSection