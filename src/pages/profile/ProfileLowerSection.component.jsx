import { use, useEffect, useState } from 'react'
import ProfilePostGridCard from './ProfilePostGridCard.component.jsx'
import { Bookmark, Film, Grid3X3 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserAllPost } from '../../features/post/getCurrentUserAllPost.api.js';
import ProfileReelGridCard from './ProfileReelGridCard.component.jsx';
import ProfileSavedGridCard from './ProfileSavedGridCard.component.jsx';
import { api } from '../../app/Api.js';
import { getCurrentUserSevedPost } from '../../features/post/getCurrentUserSevedPost.api.js';
import { getSearchedUserAllPost } from '../../features/post/getSearchedUserAllPost.api.js';
import { useParams } from 'react-router-dom';

const ProfileLowerSection = () => {

  const { authPost, searchedUserPost } = useSelector((state) => state.post);
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { userName } = useParams();

  const [postGridShow, setPostGridShow] = useState(true);
  const [reelGridShow, setReelGridShow] = useState(false);
  const [savedGridShow, setSavedGridShow] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUserAllPost());
    dispatch(getCurrentUserSevedPost());

    if(userName != user.userName) {
      setIsAuthUser(false);
      dispatch(getSearchedUserAllPost(userName));
    }else {
      setIsAuthUser(true)
    }
  }, [userName]);

  //console.log("ttttt",saved.map((item, i)=> item.content[0]._id));
  

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

        <button className='
        hover:text-violet-400
        focus:text-violet-700
        cursor-pointer'
        onClick={()=>{
          setPostGridShow(true)
          setReelGridShow(false)
          setSavedGridShow(false)
        }}>
          <Grid3X3 />
        </button>

        <button className='
        hover:text-violet-400
        focus:text-violet-700
        cursor-pointer'
        onClick={()=>{
          setPostGridShow(false)
          setReelGridShow(true)
          setSavedGridShow(false)
        }}>
          <Film />
        </button>

        {isAuthUser && <button className='
        hover:text-violet-400
        focus:text-violet-700
        cursor-pointer'
        onClick={()=>{
          setPostGridShow(false)
          setReelGridShow(false)
          setSavedGridShow(true)
        }}>
          <Bookmark />
        </button>}

      </div>

      {/* Grid */}
      <div className='grid grid-cols-3 gap-1'>

        {postGridShow ?
          (isAuthUser ? authPost.post?.map((post, i) => (
            post.resourceType === 'image' ?
            <ProfilePostGridCard
              key={i}
              post={post}
            /> : null
          )) : searchedUserPost && searchedUserPost?.map((post, i) => (
            post.resourceType === 'image' ?
            <ProfilePostGridCard
              key={i}
              post={post}
            /> : null
          ))) : reelGridShow ?
          (isAuthUser ? authPost.post?.map((reel, i) => (
            reel.resourceType === 'video' ?
            <ProfileReelGridCard
              key={i}
              reel={reel}
            /> : null
          )) : searchedUserPost && searchedUserPost?.map((reel, i) => (
            reel.resourceType === 'video' ?
            <ProfileReelGridCard
              key={i}
              reel={reel}
            /> : null
          ))) : savedGridShow ?
          authPost.savedPost?.map((item, i) => (
            <ProfileSavedGridCard
              key={i}
              media={item}
            />
          )) : null
        }

      </div>

    </div>
  )
}

export default ProfileLowerSection