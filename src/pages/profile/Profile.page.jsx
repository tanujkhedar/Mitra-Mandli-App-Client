import React, { useEffect, useState } from 'react'
import ProfileUpperSection from './ProfileUpperSection.component.jsx'
import ProfileLowerSection from './ProfileLowerSection.component.jsx'
import StoryHighlightCard from '../../components/StoryHighlightCard.component.jsx'
import { getSearchedUser } from '../../features/users/getSearchedUser.api.js'
import { useParams } from 'react-router-dom'

const Profile = () => {

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

  const [userExist, setUserExist] = useState(true);
  const {userName} = useParams();

  useEffect(() => {
    ( async () => {
      const response = await getSearchedUser(userName);
      if (response?.message == "this userName does not exist") {
        setUserExist(false);
      }
    })();
  }, []);

  return (
    <>
    {userExist ? <div className='w-full min-h-screen'>

      <ProfileUpperSection />

      <div className='
      flex 
      overflow-x-auto 
      gap-5 
      p-4 
      no-scrollbar 
      border-y
      border-gray-300'>
        {
          users.map((item, i) => (
            <StoryHighlightCard
              key={i}
              avatar={item.avatar}
              username={item.username}
            />
          ))
        }
      </div>

      <ProfileLowerSection />

    </div> : <div className='
    h-full
    w-full
    flex
    justify-center
    items-center
    text-4xl
    md:text-6xl
    text-violet-600'>
        <h1>{`${userName} is not Exist`}</h1>
      </div>}
    </>
  )
}

export default Profile