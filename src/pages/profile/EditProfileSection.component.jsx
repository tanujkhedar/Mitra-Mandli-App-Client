import { Upload, X } from "lucide-react"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"


const EditProfilePage = ({onClose}) => {

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isPrivateAccount, setIsPrivateAccount] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const handleUpdateEmail = () => {}
  const handleUpdateFullName = () => {}
  const handleUpdateUsername = () => {}
  const handleUpdatePassword = () => {}
  const handleUpdateImage = () => {}
  const handleLoadImage = () => {
    fileInputRef.current.click();
  }
  const handleUpdatePrivacy = () => {}
  const handleUpdatePrivateAccount = () => {}

  return (
    <div className="
    flex
    flex-col
    items-center
    justify-center
    p-6
    gap-4">

      <button className="
      w-10
      h-10
      m-4
      flex
      items-center
      justify-center
      rounded-full
      bg-gray-300
      text-gray-500
      hover:text-gray-700
      hover:cursor-pointer"
      onClick={onClose}>
        <X size='30' />
      </button>

      <h1 className="
      text-2xl
      font-semibold
      text-violet-600">Edit Profile</h1>
      
      <div className='
      w-full
      p-4
      flex
      flex-col
      items-center
      justify-center
      border-t
      border-gray-300'>
        <div className="
        w-20
        h-20
        flex
        items-center
        justify-center
        bg-gray-300
        rounded-full
        object-cover
        border
        border-gray-300"
        onClick={handleLoadImage}>
          <Upload size='40'/>
          <input className="
          hidden"
          accept="image/*"
          ref={fileInputRef}
          type="file" 
          name="" 
          id="" 
          onChange={(e) => setAvatar(e.target.files[0])}/>
        </div>

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" onClick={handleUpdateImage}>
          Update Image
        </button>
      </div>

      <div className='
      w-full
      p-4
      flex
      items-center
      justify-center
      border-t
      border-gray-300'>
        <input className="
        border
        border-gray-300
        rounded-lg
        p-2
        focus:outline-none
        focus:border-2
        focus:border-violet-500"
        type="text" 
        name="" 
        id=""
        placeholder={user.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" onClick={handleUpdateEmail}>Update</button>
      </div>

      <div className='
      w-full
      p-4
      flex
      items-center
      justify-center
      border-t
      border-gray-300'>
        <input className="
        border
        border-gray-300
        rounded-lg
        p-2
        focus:outline-none
        focus:border-2
        focus:border-violet-500"
        type="text" 
        name="" 
        id=""
        placeholder={user.fullName}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" onClick={handleUpdateFullName}>Update</button>
      </div>

      <div className='
      w-full
      p-4
      flex
      items-center
      justify-center
      border-t
      border-gray-300'>
        <input className="
        border
        border-gray-300
        rounded-lg
        p-2
        focus:outline-none
        focus:border-2
        focus:border-violet-500"
        type="text" 
        name="" 
        id=""
        placeholder={user.userName}
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" onClick={handleUpdateUsername}>Update</button>
      </div>

      <div className='
      w-full
      p-4
      flex
      items-center
      justify-center
      border-t
      border-gray-300'>
       
       <div className="
       space-y-4">
         <input className="
         border
         border-gray-300
         rounded-lg
         p-2
         focus:outline-none
         focus:border-2
         focus:border-violet-500"
        type="password" 
        name="" 
        id=""
        placeholder="old password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)} />

        <input className="
        border
        border-gray-300
        rounded-lg
        p-2
        focus:outline-none
        focus:border-2
        focus:border-violet-500"
        type="password" 
        name="" 
        id=""
        placeholder="new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} />
       </div>

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700"
        onClick={handleUpdatePassword}>Update</button>
      </div>

      <div className='
      w-full
      p-4
      flex
      items-center
      justify-center
      border-t
      border-gray-300'>
        <label>
          <input className="
          m-2"
          type="checkbox" 
          name="" 
          id="" 
          checked={user.isPrivateAccount}
          onChange={(e) => setIsPrivateAccount(e.target.checked)}
          />
          is private account
        </label>
        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" onClick={handleUpdatePrivateAccount}>Update</button>
      </div>
    </div>
  )
}

export default EditProfilePage