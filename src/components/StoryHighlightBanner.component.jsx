import StoryHighlightCard from "./StoryHighlightCard.component.jsx"

const StoryHighlightBanner = () => {

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
    <div className='flex overflow-x-auto lg:w-100 lg:h-full lg:flex-col lg:overflow-y-auto bg-white shadow p-4 gap-5'>
        {users.map((item, i) => <StoryHighlightCard avatar={item.avatar} username={item.username} />)}
    </div>
  )
}

export default StoryHighlightBanner