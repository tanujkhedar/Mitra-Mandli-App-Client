import React from 'react'
import MessageListCard from './MessageListCard.component.jsx'
import MessageTopbar from './MessageTopbar.component.jsx'
import { Link, Outlet, useParams } from 'react-router-dom'

const Message = () => {

  const {id} = useParams();
  const arr = [1,2,3,4,5,6,7,8,9,0]

  return (
    <div className='lg:flex'>
      <div className={`${(id) ? "hidden lg:block" : "block"} lg:w-1/3 h-dvh overflow-y-auto`}>
        <div className='sticky top-0'>
          <MessageTopbar/>
        </div>
        <Link to='/message/chat/1'>
          {arr.map((item, i) => <div className={i}> <MessageListCard/> </div>)}
        </Link>
      </div>
      <div className={`${(!id) ? "hidden lg:block" : "block"} lg:w-2/3`}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Message