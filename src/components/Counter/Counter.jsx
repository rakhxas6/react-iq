import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  // The addValue function in this code is calling setCounter multiple times in sequence, but due to the asynchronous nature of state updates in React, this won't result in incrementing the counter by 5 as expected. Each call to setCounter will override the previous state update since the updates are batched.
  // setCounter((prevCounter) => prevCounter + 1); if used this it will work as per the thought

  const removeValue = () => {
    if (counter > 0 || counter < 0) {
      // setCounter(counter - 1);
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
      //it prevents it from going below 0
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }
  };

  const reset = () => {
    setCounter(15);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <div className="btns">
        <button onClick={addValue}>Add Value {counter}</button>
        <button onClick={removeValue}>Remove Value {counter}</button>
        <button onClick={reset}>Reset Value</button>
      </div>
      <p>Footer: {counter}</p>
    </div>
  );
};

export default Counter;
