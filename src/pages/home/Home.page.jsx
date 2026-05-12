import PostCard from "./PostCard.component.jsx"
import TopNavbar from "./TopNavbar.components.jsx"
import StoryHighlightCard from "../../components/StoryHighlightCard.component.jsx";
import { use, useEffect, useState } from "react";
import { api } from "../../app/Api.js";
import { useDispatch, useSelector } from "react-redux";
import { getFeedPost } from "../../features/post/getFeedPost.api.js";


const Home = () => {

  const {feedPost} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getFeedPost());
  }, []);

  
  const timeAgo = (updatedAt) => {
    const now = new Date();
    const updated = new Date(updatedAt);

    const diff = Math.floor((now - updated) / 1000); // seconds

    if (diff < 60) {
      return `${diff} sec ago`;
    }

    const minutes = Math.floor(diff / 60);
    if (minutes < 60) {
      return `${minutes} min ago`;
   }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} h ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} d ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} m ago`;
    }

    const years = Math.floor(months / 12);
    return `${years} y ago`;
  };


const users = [
  { username: "Aarav Sharma", avatar: "https://i.pravatar.cc/150?img=11" },
  { username: "Vivaan Verma", avatar: "https://i.pravatar.cc/150?img=12" },
  { username: "Aditya Singh", avatar: "https://i.pravatar.cc/150?img=13" },
  { username: "Arjun Patel", avatar: "https://i.pravatar.cc/150?img=14" },
  { username: "Sai Kumar", avatar: "https://i.pravatar.cc/150?img=15" },
  { username: "Krishna Yadav", avatar: "https://i.pravatar.cc/150?img=16" },
  { username: "Rohan Gupta", avatar: "https://i.pravatar.cc/150?img=17" },
  { username: "Mohit Agarwal", avatar: "https://i.pravatar.cc/150?img=18" },
  { username: "Rahul Mehta", avatar: "https://i.pravatar.cc/150?img=19" },
  { username: "Karan Malhotra", avatar: "https://i.pravatar.cc/150?img=20" },

  { username: "Ananya Sharma", avatar: "https://i.pravatar.cc/150?img=21" },
  { username: "Diya Verma", avatar: "https://i.pravatar.cc/150?img=22" },
  { username: "Isha Singh", avatar: "https://i.pravatar.cc/150?img=23" },
  { username: "Priya Patel", avatar: "https://i.pravatar.cc/150?img=24" },
  { username: "Sneha Reddy", avatar: "https://i.pravatar.cc/150?img=25" },
  { username: "Neha Gupta", avatar: "https://i.pravatar.cc/150?img=26" },
  { username: "Pooja Yadav", avatar: "https://i.pravatar.cc/150?img=27" },
  { username: "Kavya Nair", avatar: "https://i.pravatar.cc/150?img=28" },
  { username: "Riya Choudhary", avatar: "https://i.pravatar.cc/150?img=29" },
  { username: "Meera Joshi", avatar: "https://i.pravatar.cc/150?img=30" }
];


  return (
    <div className="lg:h-dvh">
      <div className="
      sticky 
      top-0 
      z-50 
      h-[10%]">
        <TopNavbar/>
      </div>
      <div className="
      lg:flex 
      h-[90%] 
      overflow-y-auto">
        <div className='
        flex 
        shrink-0 
        overflow-x-auto 
        lg:overflow-y-auto 
        lg:w-100 
        lg:h-full 
        lg:flex-col 
        shadow 
        p-4 
        gap-5 
        no-scrollbar 
        lg:shadow-[0] 
        border-r 
        border-gray-300'>
          {
            users.map((item, i) => 
              <StoryHighlightCard 
              avatar={item.avatar} 
              username={item.username} 
              />
            )
          }
        </div>
        <div className="
        w-full 
        lg:h-full 
        no-scrollbar 
        lg:overflow-y-auto">
          {
            feedPost?.map((item, i) => 
              <div key={i} className="shrink-0 my-4 w-full"> 
                <PostCard 
                post_id={item._id}
                userName={item.ownerInfo.userName}
                avatar={item.ownerInfo.avatar}
                timeAgo={timeAgo(item.updatedAt)} 
                title={item.title} 
                postImage={item.file.url} 
                likeCount={item.likeCount} 
                commentCount={item.commentCount}  
                />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home