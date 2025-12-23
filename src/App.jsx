import { useState } from 'react'
import './App.css'

import { ChatInput } from './Components/ChatInput'
import { Chats } from './Components/Chats'


import 'bootstrap/dist/css/bootstrap.min.css'










function App() {
  const [isTyping, setIsTyping] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  return (
    <>
     
      <Chats chatMessages={chatMessages}
        isTyping={isTyping}
      />
       <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setIsTyping={setIsTyping}
      />

    </>
  )
}

export default App
