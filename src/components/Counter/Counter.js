"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log("hello world");
  return (
    <div>

      <h1>This is Counter Page</h1>
      <h1 className="text-red text-4xl">Counter is Running {counter}</h1>

      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Add
      </button> <br/>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        demotion
      </button>
    </div>
  );
};

export default Counter;
