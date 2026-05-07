

const ProfilePostGridCard = ({ postImage }) => {
  return (
    <div className='aspect-square overflow-hidden'>
      <img
        className='w-full h-full object-cover'
        src={postImage}
        alt="post"
      />
    </div>
  )
}

export default ProfilePostGridCard