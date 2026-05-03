import React from 'react'
import ChatTopbar from './ChatTopbar.component.jsx'
import ChatComp from './Chat.component.jsx'
import ChatBottombar from './ChatBottombar.component.jsx'

const Chat = () => {
  return (
    <div className='bg-gray-100 h-dvh'>
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