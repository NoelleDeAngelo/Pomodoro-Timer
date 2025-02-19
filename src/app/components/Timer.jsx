"use client"
import styles from "./timer.module.css";
import { useState, useEffect } from "react";


export default function Timer() {

  const [timeInSec, setTimeInSec] = useState(75)
  const[isCounting, setIsCounting]= useState(false)

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (isCounting) {
        setTimeInSec((timeInSec) => timeInSec - 1);
      }
    }, 1000);
    return () => clearInterval(intervalID);
  }, [isCounting]);

  const convertToMin = function (sec) {
    var min = Math.floor(sec / 60)
    var seconds = sec % 60
    seconds<10 ? seconds="0"+seconds: seconds=seconds
    return(min+":"+seconds)
  }

  return (
    <>
      <div className={styles.main}>
      <h1 className={styles.time}>{convertToMin(timeInSec)}</h1>
      <button
          className={`${isCounting? styles.stop : styles.start} ${styles.button}`}
        onClick={() => setIsCounting((isCounting)=>!isCounting)}
        >{isCounting ? "Stop": "Start" }</button>
      </div>
    </>
  );
}