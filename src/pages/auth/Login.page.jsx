import app_logo from '../../assets/app_logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../features/auth/login.api.js'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
      if(auth.isAuth) {
        navigate('/');
      }
    }, [auth.isAuth])

  const loginHeandler = () => {
    dispatch(loginUser({
      email,
      password
    }))
  }

  return (
    <div className="
    h-dvh 
    flex 
    items-center 
    justify-center 
    bg-gray-100 
    text-black 
    p-4">
      <div className="
      w-full 
      max-w-sm 
      p-4 
      bg-white 
      rounded-2xl 
      shadow-2xl 
      border 
      border-gray-300 
      space-y-6">

        <div className='
        flex 
        justify-center'>
            <img className='w-2xs' 
            src={app_logo} 
            alt="app logo" />
        </div>

        <p className="
        text-center 
        text-gray-400">
          Connect with your circle
        </p>

        <input
          type="text"
          placeholder="Email"
          className="w-full 
          p-3 rounded-lg 
          bg-gray-100 
          border 
          border-gray-300 
          focus:outline-none 
          focus:border-violet-500"
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full 
          p-3 rounded-lg 
          bg-gray-100 
          border 
          border-gray-300 
          focus:outline-none 
          focus:border-violet-500"
          onChange={(e) => {setPassword(e.target.value)}}
        />

        {auth.error && (
          <div className='
          text-center 
          text-sm 
          text-red-800'>
            {auth.error}
          </div>
        )}

        {auth.responseMessage && (
          <div className="
          text-center 
          text-sm 
          text-green-800">
            {auth.responseMessage}
          </div>
        )}

        <div className="
        text-right 
        text-sm 
        text-gray-400">
          Forgot Password?
        </div>

        <button className="
        w-full 
        p-3 
        rounded-lg 
        bg-linear-to-r 
        from-purple-600 
        to-violet-500 
        font-semibold
        focus:bg-linear-to-r 
        focus:from-purple-700 
        focus:to-violet-600 
        transition-colors 
        duration-300 
        text-white
        hover:bg-linear-to-r 
        hover:from-purple-500 
        hover:to-violet-400" 
        onClick={loginHeandler}>
          {auth.pending ? "Loading..." : "Login"}
        </button>

        <div className="
        text-center 
        text-gray-500">OR</div>

        <button className="
        w-full p-3 rounded-lg 
        bg-gray-300
        focus:bg-gray-400
        transition-colors 
        duration-300 
        text-gray-700
        hover:bg-gray-400">
          Continue with Google
        </button>

        <p className="
        text-center 
        text-gray-400">
          Don't have an account?{" "}
          <Link 
          to='/register' 
          className="
          text-violet-500 
          cursor-pointer">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login