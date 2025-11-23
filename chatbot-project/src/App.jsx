import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  // const [chats, setChats] = array;
  // const chats = array[0];
  // const setChats = array[1];
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day!",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      "your name": "My name is Puto",
    });

    // [] tells useEffect to only run once. We only want to run
    // this setup code once because we only want to add these
    // extra responses once.
  }, []);

  return (
    <div className="app-container">
      {chats.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          above.
        </p>
      )}
      <ChatMessages chats={chats} />
      <ChatInput
        chats={chats}
        setChats={setChats}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
