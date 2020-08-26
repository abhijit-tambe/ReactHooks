import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) setCount(count + 1);
  };
  return (
    <div>
      Count :{count}
      <button onClick={() => setCount(initialCount)}>REset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={increment5}>increment5</button>
    </div>
  );
}

export default HookCounter2;
