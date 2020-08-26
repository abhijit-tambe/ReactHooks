import React, { useState, useEffect } from "react";

function HookIntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const Interval = setInterval(tick, 1000);
    return () => {
      clearInterval(Interval);
    };
  });

  return <div> Hook {count}</div>;
}

export default HookIntervalCounter;
