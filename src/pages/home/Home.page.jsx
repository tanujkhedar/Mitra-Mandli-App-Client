import PostCard from "./PostCard.component.jsx"
import TopNavbar from "./TopNavbar.components.jsx"
import StoryHighlightCard from "../../components/StoryHighlightCard.component.jsx";


const Home = () => {

  const posts = [
  {
    username: "Aarav Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    timeAgo: "2 hours ago",
    title: "Morning ride in the village 🚴",
    postImage: "https://picsum.photos/id/1011/600/900", // portrait
    likeCount: 124,
    commentCount: 18,
    shareCount: 6
  },
  {
    username: "Ananya Sharma",
    avatar: "https://i.pravatar.cc/150?img=21",
    timeAgo: "5 hours ago",
    title: "Sunset view was amazing ❤️",
    postImage: "https://picsum.photos/id/1015/900/600", // landscape
    likeCount: 342,
    commentCount: 45,
    shareCount: 12
  },
  {
    username: "Rohan Gupta",
    avatar: "https://i.pravatar.cc/150?img=17",
    timeAgo: "1 day ago",
    title: "Coding + chai = perfect combo ☕",
    postImage: "https://picsum.photos/id/1025/600/600", // square
    likeCount: 89,
    commentCount: 9,
    shareCount: 2
  },
  {
    username: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=24",
    timeAgo: "3 hours ago",
    title: "New outfit check 👗",
    postImage: "https://picsum.photos/id/1027/600/900",
    likeCount: 567,
    commentCount: 78,
    shareCount: 20
  },
  {
    username: "Aditya Singh",
    avatar: "https://i.pravatar.cc/150?img=13",
    timeAgo: "6 hours ago",
    title: "Gym progress 💪",
    postImage: "https://picsum.photos/id/1035/900/600",
    likeCount: 210,
    commentCount: 32,
    shareCount: 10
  },
  {
    username: "Sneha Reddy",
    avatar: "https://i.pravatar.cc/150?img=25",
    timeAgo: "30 minutes ago",
    title: "Coffee date ☕",
    postImage: "https://picsum.photos/id/1040/600/600",
    likeCount: 98,
    commentCount: 14,
    shareCount: 3
  },
  {
    username: "Rahul Mehta",
    avatar: "https://i.pravatar.cc/150?img=19",
    timeAgo: "8 hours ago",
    title: "Late night debugging 😭",
    postImage: "https://picsum.photos/id/1043/600/900",
    likeCount: 65,
    commentCount: 11,
    shareCount: 1
  },
  {
    username: "Kavya Nair",
    avatar: "https://i.pravatar.cc/150?img=28",
    timeAgo: "2 days ago",
    title: "Beach vibes 🌊",
    postImage: "https://picsum.photos/id/1056/900/600",
    likeCount: 780,
    commentCount: 102,
    shareCount: 40
  },
  {
    username: "Mohit Agarwal",
    avatar: "https://i.pravatar.cc/150?img=18",
    timeAgo: "4 hours ago",
    title: "New bike 😎",
    postImage: "https://picsum.photos/id/1062/600/600",
    likeCount: 320,
    commentCount: 50,
    shareCount: 15
  },
  {
    username: "Isha Singh",
    avatar: "https://i.pravatar.cc/150?img=23",
    timeAgo: "7 hours ago",
    title: "Sketch practice ✏️",
    postImage: "https://picsum.photos/id/1069/600/900",
    likeCount: 145,
    commentCount: 22,
    shareCount: 5
  },

  {
    username: "Arjun Patel",
    avatar: "https://i.pravatar.cc/150?img=14",
    timeAgo: "10 hours ago",
    title: "Cricket match 🏏",
    postImage: "https://picsum.photos/id/1074/900/600",
    likeCount: 256,
    commentCount: 34,
    shareCount: 9
  },
  {
    username: "Neha Gupta",
    avatar: "https://i.pravatar.cc/150?img=26",
    timeAgo: "1 hour ago",
    title: "Makeup look 💄",
    postImage: "https://picsum.photos/id/1080/600/600",
    likeCount: 430,
    commentCount: 67,
    shareCount: 18
  },
  {
    username: "Sai Kumar",
    avatar: "https://i.pravatar.cc/150?img=15",
    timeAgo: "9 hours ago",
    title: "Gaming night 🎮",
    postImage: "https://picsum.photos/id/1084/600/900",
    likeCount: 199,
    commentCount: 28,
    shareCount: 7
  },
  {
    username: "Riya Choudhary",
    avatar: "https://i.pravatar.cc/150?img=29",
    timeAgo: "2 hours ago",
    title: "Selfie time 📸",
    postImage: "https://picsum.photos/id/1081/900/600",
    likeCount: 512,
    commentCount: 70,
    shareCount: 22
  },
  {
    username: "Krishna Yadav",
    avatar: "https://i.pravatar.cc/150?img=16",
    timeAgo: "3 days ago",
    title: "Village farming 🌾",
    postImage: "https://picsum.photos/id/1082/600/600",
    likeCount: 150,
    commentCount: 19,
    shareCount: 4
  },
  {
    username: "Karan Malhotra",
    avatar: "https://i.pravatar.cc/150?img=20",
    timeAgo: "6 hours ago",
    title: "Car wash day 🚗",
    postImage: "https://picsum.photos/id/1083/600/900",
    likeCount: 88,
    commentCount: 10,
    shareCount: 2
  },
  {
    username: "Meera Joshi",
    avatar: "https://i.pravatar.cc/150?img=30",
    timeAgo: "5 days ago",
    title: "Temple visit 🙏",
    postImage: "https://picsum.photos/id/1085/900/600",
    likeCount: 620,
    commentCount: 80,
    shareCount: 25
  },
  {
    username: "Vivaan Verma",
    avatar: "https://i.pravatar.cc/150?img=12",
    timeAgo: "12 hours ago",
    title: "Night sky 🌌",
    postImage: "https://picsum.photos/id/1086/600/600",
    likeCount: 305,
    commentCount: 40,
    shareCount: 11
  },
  {
    username: "Pooja Yadav",
    avatar: "https://i.pravatar.cc/150?img=27",
    timeAgo: "2 hours ago",
    title: "Cooking something special 🍲",
    postImage: "https://picsum.photos/id/1087/600/900",
    likeCount: 175,
    commentCount: 21,
    shareCount: 6
  },
  {
    username: "Diya Verma",
    avatar: "https://i.pravatar.cc/150?img=22",
    timeAgo: "4 hours ago",
    title: "Dance practice 💃",
    postImage: "https://picsum.photos/id/1088/900/600",
    likeCount: 410,
    commentCount: 60,
    shareCount: 19
  }
];

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
            posts.map((item, i) => 
              <div id={i} className="shrink-0 my-4 w-full"> 
                <PostCard 
                username={item.username} 
                avatar={item.avatar} 
                timeAgo={item.timeAgo} 
                title={item.title} 
                postImage={item.postImage} 
                likeCount={item.likeCount} 
                commentCount={item.commentCount} 
                shareCount={item.shareCount} 
                />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home