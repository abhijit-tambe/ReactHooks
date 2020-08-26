import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logmousemovement = (ev) => {
    setX(ev.clientX);
    setY(ev.clientY);
    console.log("mouse move");
  };

  useEffect(() => {
    window.addEventListener("mousemove", logmousemovement);
    console.log("useefffect caleed");

    return () => {
      window.removeEventListener("mousemove", logmousemovement);
    };
  }, []);

  return (
    <div>
      Hooks X: {x}, Y: {y}
    </div>
  );
}

export default HookMouse;
