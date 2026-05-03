import { Outlet } from "react-router-dom"
import BottomNavbar from "./BottomNavbar.component.jsx"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-dvh bg-gray-100 overscroll-none">
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      <div className="sticky bottom-0 z-50">
        <BottomNavbar/>
      </div>
    </div>
  )
}

export default MainLayout