///// ADD YOUR TUTORIAL CODE HERE /////////////
import React from "react";

const Search = () => {
  const searchText = (event) => {
    console.log(event.target.value);
  };

  const debounce = (value, delay) => {
    let timmer;
    return () => {
      clearTimeout(timmer);
      timmer = setTimeout(() => {}, delay);
    };
  };

  return (
    <div>
      <input type={"text"} placeholder="Search" onChange={searchText} />
    </div>
  );
};

export default Search;
