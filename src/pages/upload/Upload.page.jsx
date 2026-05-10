import {Image, Video, X, Upload} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../features/post/createPost.api.js'

const UploadPage = () => { 

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();
  const { loading, error, responseMessage } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("file:- ", file);
      
    }
  };

  const handleUploadFile = () => {
    fileInputRef.current.click();
  }

  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  }

  const handleSharePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', caption);
    dispatch(createPost(formData));
  }

  useEffect(() => {
    if (responseMessage) {
      setSelectedFile(null);
      setCaption('');
      //fileInputRef.current.value = null;
    } else if (error) {
      setSelectedFile(null);
      setCaption('');
      //fileInputRef.current.value = null;
    }
  }, [responseMessage, error]);

  return (
    <div className='
    w-full
    min-h-full
    flex
    justify-center
    items-center'>
      {loading ? (
        <div className='
        flex
        justify-center
        items-center'>
          <h1 className='
          font-bold
          text-2xl'>Uploading....</h1>
        </div>
      ) : (
        <div className='
        w-full
        max-w-100
        min-h-100
        lg:max-w-3xl
        m-4
      flex
      flex-col
      lg:flex-row
      border
      border-gray-300
      rounded-3xl
      shadow-2xl'>
        <div className='
        min-h-80
        max-h-dvh
        p-4
        flex
        flex-1
        flex-col
        justify-center
        items-center
        gap-4
        lg:border-r
        border-gray-300'>
          {selectedFile && selectedFile.type.includes('image') ? <img className='
          w-full
          h-full
          object-contain'
          src={URL.createObjectURL(selectedFile)} 
          alt="Preview" 
          /> : selectedFile?.type.includes('video') ? <video className='
          w-full
          h-full
          object-contain'
          src={URL.createObjectURL(selectedFile)} 
          controls
          /> : <div className='
          flex
          flex-col
          justify-center
          items-center
          gap-4'>
            <button className='
            h-20
            w-20
            rounded-full
            border
            border-gray-300
            bg-gray-300
            flex
            justify-center
            items-center'
            onClick={handleUploadFile}>
              <Upload size='40'/>
              <input
              onChange={handleFileChange}
              ref={fileInputRef} 
              type="file" 
              accept='image/*,video/*'
              className='hidden' />
            </button>
            <h1 className='
            font-medium
            text-xl'>
              Upload Photo or Video
            </h1>
          </div>}         
        </div>
        <div className='
        flex
        flex-col
        flex-1
        lg:border-0
        border-t
        border-gray-300'>
          <div className='
          flex
          justify-between
          items-center
          py-3
          px-4'>
            <h1 className='
            font-medium'>Create Post</h1>
            <button className='
            px-4
            py-1
            rounded-xl
            bg-violet-600
            focus:bg-violet-700
            hover:bg-violet-500'
            onClick={handleSharePost}>
              Share
            </button>
          </div>
          <div className='
          p-4
          gap-4
          flex
          flex-1
          flex-col
          justify-center
          border-t
          border-gray-300'>
            <div className='
            flex
            gap-4'>
              <img className='
              w-12
              h-12
              rounded-full' 
              src={user?.avatar?.url || "null"} 
              alt="" />
              <div>
                <h2 className='
                font-medium'>{user.fullName}</h2>
                <h4>@{user.userName}</h4>
              </div>
            </div>
            <textarea 
            className='
            p-4
            border
            border-gray-300
            rounded-2xl'
            placeholder='Write a caption' 
            name="" 
            id=""
            value={caption}
            onChange={handleCaptionChange}></textarea>
            <p className='text-red-500'>{error}</p>
            <p className='text-green-500'>{responseMessage}</p>
          </div>
          <div className='
          p-4
          flex
          gap-4
          border-t
          border-gray-300'>
            <div className='
            flex
            gap-2'>
              <Image/>
              <h4>Photo</h4>
            </div>
            <div className='
            flex
            gap-2'>
              <Video/>
              <h4>Video</h4>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default UploadPage