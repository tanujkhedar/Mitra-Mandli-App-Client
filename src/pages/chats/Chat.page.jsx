import React from 'react'
import ChatTopbar from './ChatTopbar.component.jsx'
import ChatComp from './Chat.component.jsx'
import ChatBottombar from './ChatBottombar.component.jsx'

const Chat = () => {
  return (
    <div className='h-full overflow-y-auto'>
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
        <div className='sticky bottom-0 p-4 z-50'>
            <ChatBottombar/>
        </div>
    </div>
  )
}

export default Chat