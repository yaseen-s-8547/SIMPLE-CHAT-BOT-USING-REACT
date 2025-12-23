

import { useState } from 'react'

import Chatbot from 'supersimpledev/chatbot'
import dayjs from 'dayjs';


export function ChatInput({  setChatMessages, setIsTyping }) {
  const [inputText, setInputText] = useState('')
  async function sendMessage() {
    const userMessages = {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID(),
      time:dayjs().format('hh:mm A')
    }
    setChatMessages(prev => [...prev, userMessages])
    setInputText('')
    setIsTyping(true)
    const response = await Chatbot.getResponseAsync(inputText)
    setIsTyping(false)
    const roboMessage = {
      message: response,
      sender: 'robo',
      id: crypto.randomUUID(),
      time:dayjs().format('hh:mm A')
    }
    setChatMessages(prev => [...prev, roboMessage])

  }





  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      sendMessage()
    }
    if (event.key === "Escape") {
      event.preventDefault()
      setInputText('')

    }
  }


  return (
    <>

      <div className="container my-5 ">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 d-flex flex-row justify-content-center">
            <input
              className="form-control border border-success"
              placeholder="type a message"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              
            />
            <button
              type="button"
              className="ms-2 btn btn-success"
              onClick={sendMessage}
            >
              send
            </button>

          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  )
}