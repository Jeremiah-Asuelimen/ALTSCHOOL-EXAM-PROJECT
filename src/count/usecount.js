import { useState } from "react";


function counterHooks(initialValue = 0) {
  const [Counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(Counter + 1);
  const decrement = () => setCounter(Counter - 1);
  const reset = () => setCounter(initialValue);
  const setNewValue = (value) => setCounter(value);
  return {
    Counter,
    increment,
    decrement,
    reset,
    setNewValue
  };
}
export default counterHooks;