import { useRef } from 'react'
import { useEffect } from 'react'
import { MYChatMessages } from './MyChatMessages';


export function Chats({ chatMessages,isTyping }) {
                  const chatMessagesRef=useRef(null)
                  useEffect(()=>{
                     const containerElem=chatMessagesRef.current
                    if(containerElem){
                        containerElem.scrollTop=containerElem.scrollHeight
                     } },[chatMessages,isTyping]);


            return (
                <div className="vh-75 overflow-auto p-2" ref={chatMessagesRef} style={{ height: "70vh" }}>

                    {chatMessages.map((chatMessages) => {
                        return (
                            <MYChatMessages
                                message={chatMessages.message}
                                sender={chatMessages.sender}
                                key={chatMessages.id}
                                time={chatMessages.time}
                            />
                            
                        );
                    })}
                     {isTyping && (<MYChatMessages
                                key="typing"
                                message="Bot is Typing"
                                sender="robo"
                                isTyping={true}
                             />)}
                </div>
            )
        }