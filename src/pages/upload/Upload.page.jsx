import {Image, Video, X, Upload} from 'lucide-react'

const UploadPage = () => {  

  return (
    <div className='
    w-full
    min-h-full
    flex
    justify-center
    items-center'>
      <div className='
      w-full
      max-w-3xl
      min-h-100
      max-h-dvh
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
        p-4
        flex
        flex-1
        flex-col
        justify-center
        items-center
        gap-4
        lg:border-r
        border-gray-300'>
          <button className='
          h-20
          w-20
          rounded-full
          border
          border-gray-300
          bg-gray-300
          flex
          justify-center
          items-center'>
            <Upload size='40'/>
          </button>
          <h1 className='
          font-medium
          text-xl'>Upload Photo or Video</h1>
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
            bg-violet-600'>Share</button>
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
              src="" 
              alt="" />
              <div>
                <h2 className='
                font-medium'>User</h2>
                <h4>@user</h4>
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
            id=""></textarea>
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
      </div>
    </div>
  )
}

export default UploadPage