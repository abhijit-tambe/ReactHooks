import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const consumeCount = useContext(CountContext);
  return (
    <div>
      Component A{consumeCount.contextCount}
      <button onClick={() => consumeCount.contextDispatcher("increment")}>
        Increment
      </button>
      <button onClick={() => consumeCount.contextDispatcher("decrement")}>
        Decrement
      </button>
      <button onClick={() => consumeCount.contextDispatcher("reset")}>
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
