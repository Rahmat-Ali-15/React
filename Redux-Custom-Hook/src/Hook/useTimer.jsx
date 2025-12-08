import { useEffect, useRef, useState } from "react";

export const useTimer = (start = 0) => {
  const [time, setTime] = useState(start);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => setTime(0);

  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);

  return { time, startTimer, stopTimer, resetTimer };
};
