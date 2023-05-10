/**
 * Throttling - Throttling is a programming pattern in which a time-consuming function call is delay by a specified time to avoid unnecessary CPU cycles.
 */

const throttling = (fn, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const apiCall = (value) => {
  console.log("the search text is ", value);
};

const search = throttling(apiCall, 500);
