"use client"
import styles from "./timer.module.css";
import { useState, useEffect, useRef } from "react";


export default function Timer({time, changeInterval, reset, warnTime, playSound}) {

  const [timeRemainingInMS, setTimeRemainingInMS] = useState(time*60*1000)
  const [isCounting, setIsCounting] = useState(false)

  const endTime = useRef(Date.now() + timeRemainingInMS + 1000);
  const warnPlayed= useRef(false)

  useEffect(() => {
    if (isCounting) {
      endTime.current= (Date.now() + timeRemainingInMS);
    }
    const intervalID = setInterval(() => {
      if (isCounting) {
        setTimeRemainingInMS(endTime.current - Date.now())
      } else {
        clearInterval(intervalID);
      }
    }, 250);
    return () => clearInterval(intervalID);
  }, [isCounting]);

  useEffect(() => {
    if (timeRemainingInMS <= 0) {
      changeInterval()
    } else if (timeRemainingInMS <= warnTime && warnPlayed.current === false) {
      warnPlayed.current= true
      playSound("warn")
    }
  }, [timeRemainingInMS])


  useEffect(() => {
    setTimeRemainingInMS(time * 60 * 1000);
    endTime.current = Date.now() + time * 60 * 1000 + 1000;
    warnPlayed.current = false;
    }, [time]);

  const convertToMin = function (ms) {
    let sec= Math.floor(ms /1000)
    let min = Math.floor(sec / 60)
    let seconds = sec % 60
    seconds<10 ? seconds="0"+seconds: seconds=seconds
    return(min+":"+seconds)
  }

  const changeTime = function (amountInMin) {
    let ms = amountInMin * 60* 1000
    setTimeRemainingInMS((prev) => {
      const newTimeRemaining = prev + ms
      endTime.current = Date.now() + newTimeRemaining
      return newTimeRemaining
    });

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

        <h1 className={styles.time}>{convertToMin(timeRemainingInMS)}</h1>
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
            setTimeRemainingInMS(time * 60 * 1000);
            endTime.current = Date.now() + (time * 60 * 1000) + 1000;
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
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}