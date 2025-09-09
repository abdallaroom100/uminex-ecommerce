import type { Dispatch, SetStateAction } from "react";
import type React from "react";

export const startTimer = ({
  setTimerValues,
  intervalRef,
}: {
  setTimerValues: Dispatch<SetStateAction<Record<string, number>>>;
  intervalRef: React.MutableRefObject<ReturnType<typeof setInterval> | null>;
}) => {
  intervalRef.current = setInterval(() => {
    setTimerValues((prev: Record<string, number>) => {
      if (prev.seconds > 0) {
        return { ...prev, seconds: prev.seconds - 1 };
      } else if (prev.minutes > 0) {
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      } else if (prev.hours > 0) {
        return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
      } else if (prev.days > 0) {
        return {
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        };
      } else {
        // خلص العداد
        if (intervalRef.current) clearInterval(intervalRef.current);
        return prev;
      }
    });
  }, 1000);
};



 export const getTimerInfo = (timerByHours: number) => {
    const days = Math.floor(timerByHours / 24);
    const hours = timerByHours % 24;
    return { days, hours, minutes: 0, seconds: 0 };
  };