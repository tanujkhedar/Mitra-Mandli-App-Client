import { Upload, X } from "lucide-react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { updateEmail } from "../../features/auth/updateEmail.api.js"
import { updateCommonDetails } from "../../features/auth/updateCommonDetails.api.js"
import { updateAvtar } from "../../features/auth/updateAvatar.api.js"
import { updatePassword } from "../../features/auth/updatePassword.api.js"
import { updateUsername } from "../../features/auth/updateUsername.api.js"


const EditProfilePage = () => {

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isPrivateAccount, setIsPrivateAccount] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const {user, pending} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    //e.stopPropagation();
    dispatch(updateEmail({email}));
  }
  const handleUpdateFullName = (e) => {
    e.preventDefault();
    dispatch(updateCommonDetails({fullName}));
  }
  const handleUpdateUsername = (e) => {
    e.preventDefault();
    dispatch(updateUsername({userName}));
  }
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    dispatch(updatePassword({oldPassword, newPassword}));
  }
  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    dispatch(updateAvtar(formData));
  }
  const handleLoadImage = () => {
    fileInputRef.current.click();
  }
  const handleUpdatePrivateAccount = (e) => {
    e.preventDefault();
    dispatch(updateCommonDetails({isProfilePublic: !isPrivateAccount}));
  }

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
      onClick={() => navigate(-1)}
      type="button">
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
          {avatar ? (
            <img 
            src={URL.createObjectURL(avatar)} 
            alt="avatar" 
            className="w-full h-full rounded-full object-cover" />
          ) : (
            <Upload size='40'/>
          )}
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
        focus:bg-violet-700" 
        type="button"
        onClick={handleUpdateImage}>
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
        onChange={(e) => setEmail(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" 
        onClick={handleUpdateEmail}
        type="button">
          Update
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
        placeholder={user.fullName}
        onChange={(e) => setFullName(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" 
        onClick={handleUpdateFullName}
        type="button">
          Update
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
        placeholder={user.userName}
        onChange={(e) => setUsername(e.target.value)} />

        <button className="
        m-4
        p-2
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        hover:cursor-pointer
        focus:rounded-4xl
        focus:bg-violet-700" 
        onClick={handleUpdateUsername}
        type="button">
          Update
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
        type="button"
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
          defaultChecked={user.isProfilePublic === false}
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
        focus:bg-violet-700" 
        onClick={handleUpdatePrivateAccount}
        type="button">
          Update
        </button>
      </div>
    </div>
  )
}

export default EditProfilePage