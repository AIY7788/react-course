import robotProfile from "../assets/images/robot.png";
import userProfile from "../assets/images/profile-1.jpg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  // const {message, sender }= props;

  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="images/robot.png" width="40" />
  //       {message}
  //     </div>
  //   )
  // }

  return (
    <div className="container-message">
      {sender === "robot" && (
        <img src={robotProfile} className="message-profile" />
      )}
      {sender === "user" ? (
        <p className="user-message">
          {message} <span>{time}</span>
        </p>
      ) : (
        <p className="robot-message">
          {message} <span>{time}</span>
        </p>
      )}
      {sender === "user" && (
        <img src={userProfile} className="message-profile" />
      )}
    </div>
  );
}
