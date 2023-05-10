///// ADD YOUR TUTORIAL CODE HERE /////////////

/**
 * Throttling - Throttling is a programming pattern in which a time-consuming function call is delay by a specified time to avoid unnecessary CPU cycles.
 */

import React, { useRef } from "react";

const Throttling = () => {
  let flag = useRef(true);

  const Search = (value, delay) => {
    if (flag.current) {
      console.log("search from text ", value);
      flag.current = false;
      setTimeout(() => {
        flag.current = true;
      }, delay);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          Search(e.target.value, 500);
        }}
      ></input>
    </div>
  );
};

export default Throttling;
