///// ADD YOUR TUTORIAL CODE HERE /////////////

/**
 * Debouncing - Debouncing is a programming pattern in which a time-consuming function call is delay by a specified time to avoid unnecessary CPU cycles.
 */

import React, { useRef } from "react";

const Search = () => {
  const timer = useRef();

  const handleChange = (e) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      console.log("the value is :--- ", e.target.value);
    }, 500);
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
