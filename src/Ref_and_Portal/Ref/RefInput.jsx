import React, { useRef } from "react";

export default function RefInput() {
  const inputRef = useRef();

  function handleClick() {
    const focus = inputRef.current.focus;
  }

  return (
    <>
      <div className="refInput">
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}
