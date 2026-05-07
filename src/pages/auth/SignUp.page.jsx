import { Link, useNavigate } from 'react-router-dom'
import app_logo from '../../assets/app_logo.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './register.api.js'

const SignUp = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandler = () => {
    dispatch(registerUser({
      fullName,
      userName,
      email,
      password
    }))
  }

  useEffect(() => {
    if(auth.isAuth) {
      navigate('/');
    }
  }, [auth.isAuth])

  return (
    <div className="h-dvh
     flex 
     items-center 
     justify-center 
     bg-gray-100 
     text-black 
     p-4">
      <div className="
      w-full 
      max-w-sm p-4
      bg-white 
      rounded-2xl
      border 
      border-gray-300 
      shadow-2xl 
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
        placeholder="Full Name"
        className="
        w-full 
        p-3 
        rounded-lg 
        bg-gray-100 border 
        border-gray-700 
        focus:outline-none 
        focus:border-violet-500" 
         onChange={(e) =>{setFullName(e.target.value)}}/>

        <input 
        type="text" 
        placeholder="Username"
        className="
        w-full 
        p-3 
        rounded-lg 
        bg-gray-100 
        border 
        border-gray-700 
        focus:outline-none 
        focus:border-violet-500" 
        onChange={(e) =>{setUserName(e.target.value)}}/>

        <input 
        type="email" 
        placeholder="Email"
        className="
        w-full 
        p-3 
        rounded-lg 
        bg-gray-100 
        border 
        border-gray-700 
        focus:outline-none 
        focus:border-violet-500" 
        onChange={(e) =>{setEmail(e.target.value)}}/>

        <input 
        type="password" 
        placeholder="Password"
        className="
        w-full 
        p-3 
        rounded-lg 
        bg-gray-100 
        border 
        border-gray-700 
        focus:outline-none 
        focus:border-violet-500" 
        onChange={(e) =>{setPassword(e.target.value)}}/>
        <div className='
        text-center 
        text-sm 
        text-red-800'>
          {auth.error}
        </div>

        <button className="
        w-full 
        p-3 
        rounded-lg 
        bg-linear-to-r 
        from-purple-600 
        to-violet-500 
        font-semibold"
        onClick={submitHandler}>
          {auth.pending ? "Loading..." : "Sign Up"}
        </button>

        <div className="
        text-center 
        text-gray-500">OR</div>

        <button className="
        w-full 
        p-3 
        rounded-lg 
        bg-gray-300">
          Continue with Google
        </button>

        <p className="
        text-center 
        text-gray-400">
          Already have an account?{" "}
          <Link 
          to='/login' 
          className="
          text-violet-500 
          cursor-pointer">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp