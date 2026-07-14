import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    setCounter((counter) => counter > 0 ? counter - 1 : 0);
  }

  function reset() {
    setCounter(0);
  }
  return (
    <div>
      <h1> Counter Machine </h1>
    <h2> Counter : {counter} </h2>
      <button onClick={increase}>+ Increase</button>

      <button onClick={decrease}>- Decrease</button>

      <button onClick={reset}> Reset </button>
    </div>
  );
}

export default Counter;
