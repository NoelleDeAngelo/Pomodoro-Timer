"use client"
import styles from "./timer.module.css";
import { useState, useEffect } from "react";


export default function Timer() {

  const [timeInSec, setTimeInSec] = useState(300)
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
    let min = Math.floor(sec / 60)
    let seconds = sec % 60
    seconds<10 ? seconds="0"+seconds: seconds=seconds
    return(min+":"+seconds)
  }

  const changeTime = function (amountInMin) {
    let seconds = amountInMin * 60
    setTimeInSec((timeInSec)=>timeInSec+seconds)
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.updowncontiner}>
          <button className={styles.updown} onClick={() => changeTime(1)}>
            +1 minute
          </button>
          <button className={styles.updown} onClick={() => changeTime(-1)}>
            -1 minute
          </button>
        </div>

        <h1 className={styles.time}>{convertToMin(timeInSec)}</h1>
        <button
          className={`${isCounting ? styles.stop : styles.start} ${
            styles.startstopbutton
          }`}
          onClick={() => setIsCounting((isCounting) => !isCounting)}
        >
          {isCounting ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}