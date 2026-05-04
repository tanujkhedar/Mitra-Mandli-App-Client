import { Outlet } from "react-router-dom"
import BottomNavbar from "./BottomNavbar.component.jsx"
import LeftNavbar from "./LeftNavbar.component.jsx"

const MainLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-dvh bg-gray-100 overscroll-none">
      <div className="hidden lg:block lg:w-xs">
        <LeftNavbar/>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      <div className="sticky bottom-0 z-50 lg:hidden">
        <BottomNavbar/>
      </div>
    </div>
  )
}

export default MainLayout