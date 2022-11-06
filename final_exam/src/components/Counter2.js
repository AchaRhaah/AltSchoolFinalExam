import React, { useReducer } from "react";
import CounterStyles from "./Counter.module.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={CounterStyles.container}>
      <p className={CounterStyles.title}>UseReducer Counter</p>

      <div className={CounterStyles.container1}>
        <button
          className={CounterStyles.operationContainer}
          onClick={() => dispatch("increment")}
        >
          <p className={CounterStyles.operation}>+</p>
        </button>
        <div className={CounterStyles.countContainer}>
          <p className={CounterStyles.count}>{count}</p>
        </div>
        <button
          className={CounterStyles.operationContainer}
          onClick={() => dispatch("decrement")}
        >
          <p className={CounterStyles.operation}>-</p>
        </button>
      </div>
      <div className={CounterStyles.container1}>
        <button className={CounterStyles.operationContainer}>
          <p className={CounterStyles.operation}>enter</p>
        </button>
        <div className={CounterStyles.countContainer}>
          <input
            className={CounterStyles.input}
            placeholder="number"
            type="number"
          />
        </div>
        <button
          className={CounterStyles.operationContainer}
          onClick={() => dispatch("reset")}
        >
          <p className={CounterStyles.operation}>reset</p>
        </button>
      </div>
    </div>
  );
}

export default Counter2;
