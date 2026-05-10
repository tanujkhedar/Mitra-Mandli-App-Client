import { useEffect, useState } from 'react'
import ReelCard from './ReelCard.component.jsx'
import { api } from '../../app/Api.js'

const Reels = () => {

  const [reels, setReels] = useState([])

 useEffect(() => {
  (async() => {
    try {
      const response = await api.get('/post/feedreels');
      setReels(response.data.data);
    } catch (error) {
      console.error('Error fetching reels:', error);
    }
  })()
 }, [])


  return (
    <div className='
    h-full 
    overflow-scroll 
    snap-y 
    snap-mandatory'>
      <div className='h-full'>
        {reels.map((item, i) => 
        <ReelCard 
        key={i}
        owner={item.owner} 
        video={item.file.url} 
        likeCount={item.likeCount} 
        commentCount={item.commentCount} 
       />)}
      </div>
    </div>
  )
}

export default Reels