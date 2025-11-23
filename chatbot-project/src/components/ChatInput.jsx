import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loadingSpinner from "../assets/images/loading-spinner.gif";
import "./ChatInput.css";
import dayjs from "dayjs";

export function ChatInput({ chats, setChats, isLoading, setIsLoading }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    const time = dayjs().format("HH:mma");

    setIsLoading(true);

    const newChatMessages = [
      ...chats,
      {
        message: inputText,
        sender: "user",
        time,
        id: crypto.randomUUID(),
      },
    ];

    setChats([
      ...newChatMessages,
      // This creates a temporary Loading... message.
      // Because we don't save this message in newChatMessages,
      // it will be remove later, when we add the response.
      {
        message: <img src={loadingSpinner} />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");

    let response = await Chatbot.getResponseAsync(inputText);

    setChats([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        time,
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function sendOnkey(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
    if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessage() {
    setChats([]);
  }

  return (
    <div className="chat-textbox">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={sendOnkey}
        disabled={isLoading}
      />
      <button onClick={sendMessage} className="send-btn">
        Send
      </button>
      <button className="clear-btn" onClick={clearMessage}>
        Clear
      </button>
    </div>
  );
}
