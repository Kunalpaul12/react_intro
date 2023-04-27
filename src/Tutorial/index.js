import React, { useState, useCallback, useMemo } from "react";
import Child from "./child";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const changeChildCounter = useCallback((num) => {
    setChildCounter(num);
  }, []);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const largestNumber = (nums) => {
    console.log("largest number called");
    return nums.sort((a, b) => b - a)[0];
  };
  const memoLargestNumber = useMemo(() => {
    return largestNumber(numbers);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <Child
        childCounter={childCounter}
        changeChildCounter={changeChildCounter}
      />
      <h1>Largest Number</h1>
      <h2>{memoLargestNumber}</h2>
    </div>
  );
};

export default Counter;
