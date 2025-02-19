
"use client"
import styles from "./page.module.css";
import Timer from "./components/Timer"
import IntervalSelector from "./components/IntervalSelector"
import { useState } from "react";


export default function Home() {

  const [pomTime, setPomTime] = useState(20)
  const [shortTime, setShortTime] = useState(5);
  const [longTime, setLongTime] = useState(15);
  const [currentInterval, setCurrentInterval] = useState("pom")
  const [currentIntervalLength, setCurrentIntervalLength] = useState(pomTime)
  const [roundsCount, setRoundsCount]=useState(0)

  const changeTime = function (interval,amount) {
    if (interval === "pom") {
      setPomTime((pomTime) => pomTime + amount)
    }else if (interval==="short"){
        setShortTime((shortTime)=>shortTime+amount)
    } else if (interval === "long") {
      setLongTime((longTime)=>longTime+amount)
    }
  }

  const changeInterval = function () {
    if (currentInterval === "pom") {
      if (roundsCount > 3) {
        setCurrentInterval("long")
        setCurrentIntervalLength(longTime)
        setRoundsCount(0)
      } else {
        setCurrentInterval("short")
        setCurrentIntervalLength(shortTime)
        setRoundsCount((prev)=>prev+1)
      }
    } else {
      setCurrentInterval("pom")
      setCurrentIntervalLength(pomTime)
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntervalSelector changeTime={changeTime} pomTimeSet={pomTime} shortTimeSet={shortTime} longTimeSet={ longTime} />
        <Timer className={styles.timer} time={currentIntervalLength} changeInterval={changeInterval} />
      </main>
      <footer className= {styles.footer}>
      </footer>
    </div>
  );
}
