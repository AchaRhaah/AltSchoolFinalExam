import { useState } from "react";

function useCounter(num) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const setcount = (num) => {
    setCount(num);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
