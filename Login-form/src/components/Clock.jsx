import { useState, useEffect } from "react";
import dayjs from "dayjs";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    console.log("🟢 Clock mounted");

    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
      console.log("run code");
    }, 1000);

    // if we don't have this line it will keep running in the background even after the component is unmounted (removed from the screen).
    return () => {
      clearInterval(timer);
      console.log("🔴 Clock unmounted & timer cleared");
    };
  }, []);

  return <p>{currentTime}</p>;
}
