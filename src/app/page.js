
"use client"
import styles from "./page.module.css";
import Timer from "./components/Timer"
import IntervalSelector from "./components/IntervalSelector"
import { useState } from "react";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";


export default function Home() {

  const [pomTime, setPomTime] = useState(20)
  const [shortTime, setShortTime] = useState(5);
  const [longTime, setLongTime] = useState(15);
  const [currentInterval, setCurrentInterval] = useState("pom")
  const [currentIntervalLength, setCurrentIntervalLength] = useState(pomTime)
  const [roundsCount, setRoundsCount]=useState(0)

  const changeTime =  (interval,amount)=> {
    if (interval === "pom") {
      setPomTime((pomTime) => pomTime + amount)
    }else if (interval==="short"){
        setShortTime((shortTime)=>shortTime+amount)
    } else if (interval === "long") {
      setLongTime((longTime)=>longTime+amount)
    }
  }


  const changeInterval = ()=> {
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

  const reset = () => {
    setCurrentInterval("pom")
    setCurrentIntervalLength(pomTime)
    setRoundsCount(0)
  }

  const generateDots = () => {
    let count = roundsCount
    let dots=[]
    for (var i = 0; i < 4; i++){
      if (count > 0) {
        dots.push(<VscCircleFilled />);
        count--
      } else {
        dots.push(<VscCircle />);
      }
    }
    return dots
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntervalSelector
          changeTime={changeTime}
          pomTimeSet={pomTime}
          shortTimeSet={shortTime}
          longTimeSet={longTime}
        />
        <div>{generateDots().map((dot,i) => (
          <span key={i}>{ dot}</span>
        ))}</div>

        <Timer
          className={styles.timer}
          time={currentIntervalLength}
          changeInterval={changeInterval}
          reset={reset}
        />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
