import PostCard from "../components/PostCard.component.jsx"
import StoryHighlight from "../components/StoryHighlight.component.jsx"


const Home = () => {
  return (
    <div>
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