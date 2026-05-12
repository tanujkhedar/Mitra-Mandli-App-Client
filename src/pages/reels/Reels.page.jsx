import { useEffect, useState } from 'react'
import ReelCard from './ReelCard.component.jsx'
import { api } from '../../app/Api.js'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedReels } from '../../features/post/getFeedReels.api.js'

const Reels = () => {

  const {feedReels} = useSelector((state) => state.post);
  const [muted, setMuted] = useState(true);
  const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getFeedReels());
 }, [])


  return (
    <div className='
    h-full 
    overflow-scroll 
    snap-y 
    snap-mandatory'>
      <div className='h-full'>
        {feedReels.map((item, i) => 
        <ReelCard 
        key={i}
        index={i}
        muted={muted}
        setMuted={setMuted}
        avatar={item.ownerInfo?.avatar?.url} 
        userName={item.ownerInfo.userName}
        video={item.file.url} 
        likeCount={item.likeCount} 
        commentCount={item.commentCount} 
       />)}
      </div>
    </div>
  )
}

export default Reels