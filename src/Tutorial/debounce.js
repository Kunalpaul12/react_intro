/**
 * Debouncing - Debouncing is a programming pattern in which a time-consuming function call is delay by a specified time to avoid unnecessary CPU cycles.
 */

function debounce(fn, delay) {
  let timer;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, arg);
    }, delay);
  };
}

const apiCall = (value) => {
  console.log("calling api with value ", value);
};

const search = debounce(apiCall, 500);
