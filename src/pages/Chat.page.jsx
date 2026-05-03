import React from 'react'
import ChatTopbar from '../components/ChatTopbar.component.jsx'
import ChatComp from '../components/Chat.component.jsx'
import ChatBottombar from '../components/ChatBottombar.component.jsx'

const Chat = () => {
  return (
    <div className='bg-gray-100'>
        <div className='sticky top-0 z-50'>
            <ChatTopbar/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div>
            <ChatComp/>
        </div>
        <div className='sticky bottom-0 z-50'>
            <ChatBottombar/>
        </div>
    </div>
  )
}

export default Chat