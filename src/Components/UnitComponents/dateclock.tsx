import { useState, useEffect } from "react";

function Dateclock() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });
  const [date, setDate] = useState({
    day: new Date().getDay(),
    dateno: new Date().getDate(),
    month: new Date().getMonth(),
  });
  const daysofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var mnth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (n: number) => {
    return n.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <div className="pointer-events-none text-white flex flex-col items-center w-max">
      <div className="relative text-8xl font-bold flex gap-5 align-center">
        <span>{convertToTwoDigit(time.hours)}</span>
        <span className="absolute left-[45%] bottom-[8%]">:</span>
        <span>{convertToTwoDigit(time.minutes)}</span>
      </div>
      <span className="font-medium">
        {daysofweek[date.day] + ", " + date.dateno + " " + mnth[date.month]}
      </span>
    </div>
  );
}

export default Dateclock;
