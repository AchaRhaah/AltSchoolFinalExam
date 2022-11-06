import React from "react";
import CounterStyles from "./Counter.module.css";
import useCounter from "../Hooks/useCounter";

function Counter() {
  const [count, increment, decrement, reset, setcount] = useCounter();
  const change = (event) => {
    const newVal = event.target.value;
    setcount(newVal);
  };

  return (
    <div className={CounterStyles.container}>
      <p className={CounterStyles.title}>Custom Hooks Counter</p>

      <div className={CounterStyles.container1}>
        <button
          className={CounterStyles.operationContainer}
          onClick={increment}
        >
          <p className={CounterStyles.operation}>+</p>
        </button>
        <div className={CounterStyles.countContainer}>
          <p className={CounterStyles.count}>{count}</p>
        </div>
        <button
          className={CounterStyles.operationContainer}
          onClick={decrement}
        >
          <p className={CounterStyles.operation}>-</p>
        </button>
      </div>
      <div className={CounterStyles.container1}>
        <button className={CounterStyles.operationContainer} onClick={setcount}>
          <p className={CounterStyles.operation}>enter</p>
        </button>
        <div className={CounterStyles.countContainer}>
          <input
            className={CounterStyles.input}
            placeholder="number"
            type="number"
            onChange={change}
          />
        </div>
        <button className={CounterStyles.operationContainer} onClick={reset}>
          <p className={CounterStyles.operation}>reset</p>
        </button>
      </div>
    </div>
  );
}

export default Counter;
