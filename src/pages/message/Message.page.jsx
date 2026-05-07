import MessageListCard from './MessageListCard.component.jsx'
import MessageTopbar from './MessageTopbar.component.jsx'
import { Link, Outlet, useParams } from 'react-router-dom'

const Message = () => {

  const {id} = useParams();
  const arr = [1,2,3,4,5,6,7,8,9,0]

  return (
    <div className='
    flex 
    flex-col 
    lg:flex-row 
    items-center
    h-full'>
      <div className={`
        ${(id) ? "hidden lg:block" : "block"} 
        w-full
        min-w-100
        lg:w-1/3 
        h-full
        overflow-y-auto
        no-scrollbar
        lg:border-r
        border-gray-300`
        }>
        <div className='sticky top-0'>
          <MessageTopbar/>
        </div>
        <Link 
        to='/message/chat/1'>
          {arr.map((item, i) => <div className={i}> <MessageListCard/> </div>)}
        </Link>
      </div>
      <div className={`
        ${(!id) ? "hidden lg:block" : "block"}
        w-full 
        h-full
        lg:w-2/3`
        }>
        <Outlet/>
      </div>
    </div>
  )
}

export default Message