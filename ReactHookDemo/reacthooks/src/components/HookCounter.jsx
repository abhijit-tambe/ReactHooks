import React, { useState } from "react";

function HookCounter() {
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <br />
      {counter}
    </div>
  );
}

export default HookCounter;
