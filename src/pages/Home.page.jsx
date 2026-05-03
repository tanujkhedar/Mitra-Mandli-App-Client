import PostCard from "../components/PostCard.component.jsx"
import StoryHighlight from "../components/StoryHighlight.component.jsx"


const Home = () => {
  return (
    <div className="overscroll-none">
      <div>
        <StoryHighlight/>
      </div>
      <div>
        <PostCard/>
      </div>
      <div>
        <PostCard/>
      </div>
      <div>
        <PostCard/>
      </div>
      <div>
        <PostCard/>
      </div>
    </div>
  )
}

export default Home