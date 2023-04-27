import React, { memo } from "react";

const Child = ({ childCounter, changeChildCounter }) => {
  console.log("child render");
  return (
    <div>
      <h1>Child</h1>
      <h2>{childCounter}</h2>
      <button onClick={() => changeChildCounter(childCounter + 1)}>+</button>
      <button onClick={() => changeChildCounter(childCounter - 1)}>-</button>
    </div>
  );
};

export default memo(Child);
