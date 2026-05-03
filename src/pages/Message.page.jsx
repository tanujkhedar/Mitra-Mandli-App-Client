import React from 'react'
import MessageListCard from '../components/MessageListCard.component.jsx'
import MessageTopbar from '../components/MessageTopbar.component.jsx'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div>
      <div className='sticky top-0'>
        <MessageTopbar/>
      </div>
      <Link to='/message/chat'>
        <MessageListCard/>
      </Link>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
      <div>
        <MessageListCard/>
      </div>
    </div>
  )
}

export default Message