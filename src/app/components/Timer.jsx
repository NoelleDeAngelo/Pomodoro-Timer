"use client"
import { useState, useEffect } from "react";


export default function Timer() {

  const [timeInSec, setTimeInSec] = useState(65)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeInSec((timeInSec)=>timeInSec-1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const convertToMin = function (sec) {
    var min = Math.floor(sec / 60)
    var seconds = sec % 60
    return(min+":"+seconds)
  }

  return (
    <>
      <h1>{convertToMin(timeInSec)}</h1>
    </>
  );
}