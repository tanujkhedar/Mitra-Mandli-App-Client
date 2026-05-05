import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
  const {isAuth, pending} = useSelector((state) => state.auth);

  if(pending) {
    return <div className="h-dvh w-full flex items-center justify-center"><h1>Loading</h1></div>
  }
  

  return isAuth ? children : <Navigate to='/login' replace/>
}

export default ProtectedRoutes