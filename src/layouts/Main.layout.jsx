import { Outlet } from "react-router-dom"
import BottomNavbar from "./BottomNavbar.component.jsx"
import LeftNavbar from "./LeftNavbar.component.jsx"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUser } from "../pages/auth/getUser.api.js"

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="flex 
    flex-col 
    lg:flex-row 
    h-dvh 
    bg-white 
    text-black
    ">
      <div className="hidden lg:block">
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