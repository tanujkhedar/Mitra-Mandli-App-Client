import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/loading/Loading.page.jsx";

const ProtectedRoutes = ({children}) => {
  const {isAuth, getPending} = useSelector((state) => state.auth);

  if(getPending && !isAuth) {
    
    return <LoadingPage/>
  }
  
  return isAuth ? children : <Navigate to='/login' replace/>
}

export default ProtectedRoutes