import React, { useReducer } from "react";

const initialValue = {
  count: 0,
};

export const Counter = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return { count: state.count++ };
      case "decrement":
        return { count: state.count-- };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Current counter is :--- {state.count}</h1>
      <button onClick={() => dispatch("increment")}>increment +</button>
      <button onClick={() => dispatch("decrement")}>decrement -</button>
    </div>
  );
};
