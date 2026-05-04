import React from 'react'
import ReelCard from './ReelCard.component.jsx'

const Reels = () => {

const reels = [
  {
    username: "Aarav Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    aspectRatio: "9:16",
    likeCount: 1240,
    commentCount: 120,
    shareCount: 45
  },
  {
    username: "Ananya Sharma",
    avatar: "https://i.pravatar.cc/150?img=21",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    aspectRatio: "1:1",
    likeCount: 980,
    commentCount: 95,
    shareCount: 30
  },
  {
    username: "Rohan Gupta",
    avatar: "https://i.pravatar.cc/150?img=17",
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    aspectRatio: "16:9",
    likeCount: 540,
    commentCount: 40,
    shareCount: 12
  },
  {
    username: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=24",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    aspectRatio: "4:5",
    likeCount: 2100,
    commentCount: 180,
    shareCount: 75
  },
  {
    username: "Aditya Singh",
    avatar: "https://i.pravatar.cc/150?img=13",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    aspectRatio: "9:16",
    likeCount: 760,
    commentCount: 60,
    shareCount: 22
  },
  {
    username: "Sneha Reddy",
    avatar: "https://i.pravatar.cc/150?img=25",
    video: "https://samplelib.com/lib/preview/mp4/sample-5mb.mp4",
    aspectRatio: "1:1",
    likeCount: 890,
    commentCount: 70,
    shareCount: 28
  },
  {
    username: "Rahul Mehta",
    avatar: "https://i.pravatar.cc/150?img=19",
    video: "https://samplelib.com/lib/preview/mp4/sample-15mb.mp4",
    aspectRatio: "16:9",
    likeCount: 430,
    commentCount: 25,
    shareCount: 10
  },
  {
    username: "Kavya Nair",
    avatar: "https://i.pravatar.cc/150?img=28",
    video: "https://samplelib.com/lib/preview/mp4/sample-20mb.mp4",
    aspectRatio: "9:16",
    likeCount: 3200,
    commentCount: 250,
    shareCount: 110
  },
  {
    username: "Mohit Agarwal",
    avatar: "https://i.pravatar.cc/150?img=18",
    video: "https://samplelib.com/lib/preview/mp4/sample-10mb.mp4",
    aspectRatio: "4:5",
    likeCount: 670,
    commentCount: 55,
    shareCount: 18
  },
  {
    username: "Isha Singh",
    avatar: "https://i.pravatar.cc/150?img=23",
    video: "https://samplelib.com/lib/preview/mp4/sample-30mb.mp4",
    aspectRatio: "9:16",
    likeCount: 1500,
    commentCount: 140,
    shareCount: 60
  },

  {
    username: "Arjun Patel",
    avatar: "https://i.pravatar.cc/150?img=14",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    aspectRatio: "16:9",
    likeCount: 800,
    commentCount: 75,
    shareCount: 25
  },
  {
    username: "Neha Gupta",
    avatar: "https://i.pravatar.cc/150?img=26",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    aspectRatio: "1:1",
    likeCount: 1900,
    commentCount: 160,
    shareCount: 70
  },
  {
    username: "Sai Kumar",
    avatar: "https://i.pravatar.cc/150?img=15",
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    aspectRatio: "9:16",
    likeCount: 720,
    commentCount: 58,
    shareCount: 20
  },
  {
    username: "Riya Choudhary",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    aspectRatio: "4:5",
    likeCount: 2400,
    commentCount: 200,
    shareCount: 95
  },
  {
    username: "Krishna Yadav",
    avatar: "https://i.pravatar.cc/150?img=16",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    aspectRatio: "9:16",
    likeCount: 560,
    commentCount: 42,
    shareCount: 15
  },
  {
    username: "Karan Malhotra",
    avatar: "https://i.pravatar.cc/150?img=20",
    video: "https://samplelib.com/lib/preview/mp4/sample-5mb.mp4",
    aspectRatio: "16:9",
    likeCount: 610,
    commentCount: 48,
    shareCount: 17
  },
  {
    username: "Meera Joshi",
    avatar: "https://i.pravatar.cc/150?img=30",
    video: "https://samplelib.com/lib/preview/mp4/sample-15mb.mp4",
    aspectRatio: "1:1",
    likeCount: 2800,
    commentCount: 230,
    shareCount: 100
  },
  {
    username: "Vivaan Verma",
    avatar: "https://i.pravatar.cc/150?img=12",
    video: "https://samplelib.com/lib/preview/mp4/sample-20mb.mp4",
    aspectRatio: "9:16",
    likeCount: 1300,
    commentCount: 110,
    shareCount: 50
  },
  {
    username: "Pooja Yadav",
    avatar: "https://i.pravatar.cc/150?img=27",
    video: "https://samplelib.com/lib/preview/mp4/sample-10mb.mp4",
    aspectRatio: "4:5",
    likeCount: 1700,
    commentCount: 150,
    shareCount: 65
  },
  {
    username: "Diya Verma",
    avatar: "https://i.pravatar.cc/150?img=22",
    video: "https://samplelib.com/lib/preview/mp4/sample-30mb.mp4",
    aspectRatio: "9:16",
    likeCount: 2200,
    commentCount: 190,
    shareCount: 85
  }
];


  return (
    <div className='h-full overflow-scroll snap-y snap-mandatory'>
      <div className='h-full'>
        {reels.map((item, i) => <ReelCard username={item.username} avatar={item.avatar} video={item.video} likeCount={item.likeCount} commentCount={item.commentCount} shareCount={item.shareCount} />)}
      </div>
    </div>
  )
}

export default Reels