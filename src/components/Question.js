import React, { useState, useEffect } from "react";

function Question({onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeRemaining((prev) => {
      if (prev === 1) {
        onAnswered(false);
        return 10;
      }
      return prev - 1;
        });
  }, 1000);
  return () => {
    clearTimeout(timer);
  };
}, [timeRemaining, onAnswered]);

return <div>
  <p>Time remaining: {timeRemaining} seconds</p>
</div>
}

export default Question;
