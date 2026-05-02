import { Outlet } from "react-router-dom"
import TopNavbar from "../components/TopNavbar.components.jsx"
import BottomNavbar from "../components/BottomNavbar.component.jsx"


const Main = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="sticky top-0 z-50">
        <TopNavbar/>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      <div className="sticky bottom-0 z-50">
        <BottomNavbar/>
      </div>
    </div>
  )
}

export default Main