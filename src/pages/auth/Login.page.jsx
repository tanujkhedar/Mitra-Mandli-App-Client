import app_logo from '../../assets/app_logo.png'

const Login = () => {
  return (
    <div className="h-dvh flex items-center justify-center bg-gray-100 text-black p-4">
      <div className="w-full max-w-sm p-4 bg-white rounded-2xl shadow space-y-6">

        <div className='flex justify-center'>
            <img className='w-2xs' src={app_logo} alt="app logo" />
        </div>

        <p className="text-center text-gray-400">
          Connect with your circle
        </p>

        <input
          type="text"
          placeholder="Email or Username"
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-700 focus:outline-none focus:border-violet-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-700 focus:outline-none focus:border-violet-500"
        />

        <div className="text-right text-sm text-gray-400">
          Forgot Password?
        </div>

        <button className="w-full p-3 rounded-lg bg-linear-to-r from-purple-600 to-violet-500 font-semibold">
          Login
        </button>

        <div className="text-center text-gray-500">OR</div>

        <button className="w-full p-3 rounded-lg bg-gray-300">
          Continue with Google
        </button>

        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <span className="text-violet-500 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login