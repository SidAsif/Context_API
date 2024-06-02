import React, { useContext } from "react";
import { CounterContext } from "../Context/Counter";
export default function Counter() {
  const counterContext = useContext(CounterContext);

  return (
    <>
      <div>
        <button
          style={{ border: "2px solid blue" }}
          onClick={() => counterContext.setCount(counterContext.count + 1)}
        >
          Increment
        </button>
        <button
          style={{ border: "2px solid blue" }}
          onClick={() => counterContext.setCount(counterContext.count - 1)}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
