"use client"
import styles from "./timer.module.css";
import { useState, useEffect } from "react";


export default function Timer({time, changeInterval, reset}) {

  const [timeInSec, setTimeInSec] = useState(time*60)
  const[isCounting, setIsCounting]= useState(false)

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (isCounting) {
        setTimeInSec((timeInSec) => timeInSec - 1);
      } else {
        clearInterval(intervalID);
      }
    }, 1000);
    return () => clearInterval(intervalID);
  }, [isCounting]);

  useEffect(() => {
    if (timeInSec <= 0) {
      changeInterval()
    }
  }, [timeInSec])


  useEffect(() => {
      setTimeInSec(time*60)
    }, [time]);

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
          {isCounting ? "Pause" : "Start"}
        </button>
        <button
          className={styles.startstopbutton}
          onClick={() => {
            setTimeInSec(time * 60);
          }}
        >
          Restart Interval
        </button>
        <button
          className={styles.startstopbutton}
          onClick={() => {
            changeInterval();
          }}
        >
          Next Interval
        </button>
        <button
          className={styles.startstopbutton}
          onClick={() => {
            reset();
            setTimeInSec(time*60)
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}