import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseBy() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseBy() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Increase By: {incrementBy}</p>
      <button onClick={increaseBy}>Increase By</button>
      <button onClick={decreaseBy}>Decrease By</button>
    </div>
  );
}
