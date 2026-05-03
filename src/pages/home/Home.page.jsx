import PostCard from "./PostCard.component.jsx"
import StoryHighlight from "../../components/StoryHighlight.component.jsx"
import TopNavbar from "./TopNavbar.components.jsx"

const Home = () => {
  return (
    <div className="overscroll-none">
      <div className="sticky top-0 z-50">
        <TopNavbar/>
      </div>
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