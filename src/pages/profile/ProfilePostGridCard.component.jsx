

const ProfilePostGridCard = ({ post }) => {
  return (
    <div className='aspect-square overflow-hidden'>
      <img
        className='w-full h-full object-cover'
        src={post?.file?.url}
        alt="post"
      />
    </div>
  )
}

export default ProfilePostGridCard