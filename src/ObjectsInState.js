import { useState } from "react";

export function CursorHighlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <h3>Move cursor inside the box</h3>
      <div
        style={{
          width: "500px",
          height: "400px",
          border: "2px solid violet",
          position: "relative",
          display: "border-box",
        }}
        onPointerMove={(event) => {
          handleMove(event);
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: "20px",
            height: "20px",
            top: "0",
            left: "0",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        />
      </div>
    </>
  );
}
