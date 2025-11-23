import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function useAutoScroll(dependencies) {
  // Custom Hook

  const chatMessageRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessageRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return chatMessageRef;
}

function ChatMessages({ chats }) {
  const ref = useAutoScroll(chats);

  return (
    <div className="chat-messages-container" ref={ref}>
      {chats.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
