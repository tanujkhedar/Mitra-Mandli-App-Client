import { use, useEffect, useState } from 'react'
import ProfilePostGridCard from './ProfilePostGridCard.component.jsx'
import { Bookmark, Film, Grid3X3 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserAllPost } from '../../features/post/getCurrentUserAllPost.api.js';

const ProfileLowerSection = () => {

  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);

  useEffect(() => {
    dispatch(getCurrentUserAllPost());
  }, []);

  useEffect(() => {
    setPost(posts);
  }, [posts]);


  return (

    <div className='bg-white'>

      {/* Tabs */}
      <div className='
      sticky
      top-0
      z-10
      bg-white
      flex
      justify-around
      py-4
      border-b
      border-gray-300
      '>

        <button>
          <Grid3X3 />
        </button>

        <button>
          <Film />
        </button>

        <button>
          <Bookmark />
        </button>

      </div>

      {/* Grid */}
      <div className='grid grid-cols-3 gap-1'>

        {
          post?.map((post, i) => (
            post.resourceType === 'image' ?
            <ProfilePostGridCard
              key={i}
              postImage={post.file.url}
            /> : null
          ))
        }

      </div>

    </div>
  )
}

export default ProfileLowerSection