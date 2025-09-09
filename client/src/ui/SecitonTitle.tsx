import { useEffect, useRef, useState } from "react";
import { getTimerInfo, startTimer } from "../helper/timer";

type SectionTitleProps = {
  title: string;
  viewAllLink: string;
  timer?: number; 
};

const SectionTitle = ({ title, viewAllLink, timer }: SectionTitleProps) => {
  const [timerValues, setTimerValues] = useState<Record<string,number>>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


 


  useEffect(() => {
    if (timer) {
      setTimerValues(getTimerInfo(timer));
      startTimer({setTimerValues,intervalRef});
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timer]);

  // فورمات العرض
  const formatValue = (value: number) => String(value).padStart(2, "0");

  return (
    <>
      {timer ?
        <div className="section__title__wrapper py-2">
          <div className="rounded-sm  justify-center flex sm:justify-between px-3 py-2 items-center bg-white flex-wrap">
            <div className="title ">
              <p>{title}</p>
            </div>
            <div className="timer flex gap-3 items-center flex-wrap sm:justify-start justify-center">
              <span>Hurry up! Offer ends in:</span>
              <ul className="flex gap-2">
                <li className="bg-red-500 text-white w-10 px-3 py-1 rounded-sm">
                  {formatValue(timerValues.days)}
                </li>
                <li className="bg-red-500 text-white w-10 px-3 py-1 rounded-sm">
                  {formatValue(timerValues.hours)}
                </li>
                <li className="bg-red-500 text-white w-10 px-3 py-1 rounded-sm">
                  {formatValue(timerValues.minutes)}
                </li>
                <li className="bg-red-500 text-white w-10 px-3 py-1 rounded-sm">
                  {formatValue(timerValues.seconds)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      :
       <div className="section__title__wrapper py-2">
          <div className="rounded-sm flex justify-between px-3 py-2 items-center bg-white flex-wrap">
            <div className="title">
              <p className="uppercase">{title}</p>
            </div>
            <div className="">
             <a href="">
              {viewAllLink}
             </a>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SectionTitle;
