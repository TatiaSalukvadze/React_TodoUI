import React, { useState, useEffect, useContext } from "react";
import "./Header.css";

function Header() {
  const [time, setTime] = useState(new Date());

  const date = time
    .toLocaleDateString([], {
      weekday: "short",
      day: "numeric",
    })
    .split(" ")
    .reverse()
    .join(" ");

  const clock = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="head">
      <p>{date}</p>
      <h1>{clock}</h1>
    </div>
  );
}

export default Header;
