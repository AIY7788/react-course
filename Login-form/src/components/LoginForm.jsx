import { useState } from "react";
import { Clock } from "./Clock";

export function LoginForm() {
  const [isShow, setIsShow] = useState(false);

  const [showClock, setShowClock] = useState(true);

  function handleClickShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <div>
        <button onClick={() => setShowClock(!showClock)}>
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        <hr />
        {showClock && <Clock />}

        <input type="email" placeholder="Email" />
        <br />
        <input type={isShow ? "text" : "password"} placeholder="Password" />
        <button onClick={handleClickShow} className="show-btn">
          {isShow ? "Hide" : "Show"}
        </button>
      </div>
      <button>Login</button>
      <button>Sign up</button>
    </>
  );
}
