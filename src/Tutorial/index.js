import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};

export default Timer;
