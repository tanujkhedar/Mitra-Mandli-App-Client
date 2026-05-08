import { useSelector } from "react-redux"
import { useState } from "react"
import EditProfileSection from "./EditProfileSection.component.jsx"


const ProfileUpperSection = () => {

  const {user} = useSelector((state) => state.auth);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleEditProfile = () => {
    setShowEditProfile(true);
  }

  const handleShareProfile = () => {
    // Implement share profile functionality here
  }

  const handleFollowers = () => {
    //navigate('/profile/followlist/followers');
  }

  const handleFollowing = () => {
    //navigate('/profile/followlist/following');
  }


  return (

    <div className='bg-violet-600 pt-30 lg:py-10 lg:p-[1%]'>

      <div className='
      bg-white
      rounded-t-full
      lg:rounded-l-full
      lg:rounded-r-full
      lg:rounded-t-none
      min-h-100
      lg:min-h-87
      relative
      flex
      flex-col
      lg:flex-row
      items-center
      justify-center
      px-6
      lg:px-20
      pb-10
      lg:gap-20
      lg:min-w-4xl
      lg:shadow-2xl
      lg:border
      border-gray-300
      
      '>
        <div className='
        -mt-20
        lg:mt-8
        lg:absolute
        lg:left-5
        '>
          <img
            className='
            w-40
            h-40
            lg:w-80
            lg:h-80
            rounded-full
            object-cover
            border-4
            border-white
            lg:shadow-2xl
            '
            src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060"
            alt="avatar"
          />
        </div>

        <div className='flex flex-col items-center w-full lg:ml-80'>

          <div className='text-center mt-4'>
            <h1 className='text-2xl lg:text-4xl font-bold'>
              {user.fullName}
            </h1>

            <p className='text-gray-500 text'>
              {`@${user.userName}`}
            </p>
          </div>

          <p className='mt-4 text-center font-medium overflow-hidden h-5 w-full lg:w-3/4 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
          </p>

          <div className='
          flex
          justify-around
          w-full
          mt-4
          text-center
          '>

            <div className="p-2">
              <div className='text-2xl lg:text-4xl font-bold'>
                9
              </div>
              <div className='text-gray-600 font-semibold'>
                Posts
              </div>
            </div>

            <button className="
            p-2
            hover:cursor-pointer
            hover:border-2
            hover:bg-violet-100
            border-violet-200
            rounded-lg
            focus:bg-violet-200"
            onClick={handleFollowers}>
              <div className='text-2xl lg:text-4xl font-bold'>
                {user.followerCount}
              </div>
              <div className='text-gray-600 font-semibold'>
                Followers
              </div>
            </button>

            <button className="
            p-2
            hover:cursor-pointer
            hover:border-2
            hover:bg-violet-100
            border-violet-200
            rounded-lg
            focus:bg-violet-200"
            onClick={handleFollowing}>
              <div className='text-2xl lg:text-4xl font-bold'>
                {user.followingCount}
              </div>
              <div className='text-gray-600 font-semibold'>
                Following
              </div>
            </button>

          </div>

          <div className='
          flex
          mt-4
          w-full
          justify-around
          '>

            <button className='
            h-14
            w-45
            px-10
            rounded-xl
            bg-violet-600
            text-white
            font-semibold
            shadow-lg
            hover:bg-violet-700
            hover:cursor-pointer
            focus:rounded-4xl
            '
            onClick={handleEditProfile}>
              Edit Profile
            </button>

            <button className='
            h-14
            w-45
            px-10
            rounded-xl
            bg-violet-600
            text-white
            font-semibold
            shadow-lg
            hover:bg-violet-700
            hover:cursor-pointer
            focus:rounded-4xl
            '
            onClick={handleShareProfile}>
              Share Profile
            </button>

          </div>

        </div>

      </div>

      {showEditProfile && <div className='
      fixed 
      top-0 
      left-0 
      w-full 
      h-full 
      flex 
      items-center 
      justify-center 
      z-50
      bg-black/80'>
        <div className='
        overflow-y-auto
        bg-white 
        p-4 
        rounded-lg 
        shadow-lg 
        w-11/12 
        max-h-[70vh]
        max-w-1/2'>
          <EditProfileSection onClose={() => setShowEditProfile(false)} />
        </div>
      </div>}
    </div>
  )
}

export default ProfileUpperSection