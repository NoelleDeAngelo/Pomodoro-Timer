"use client"
import { useState} from "react";


export default function IntervalSelector({changeTime, pomTimeSet, shortTimeSet, longTimeSet, warnTimeSet}) {

  return (
    <>
      <h1>Interval picker </h1>
      <div>
        <span>Warning Time {warnTimeSet}</span>
        <button
          onClick={() => {
            changeTime("warn", .5);
          }}
        >
          +30 sec
        </button>
        <button
          onClick={() => {
            changeTime("warn", -.5);
          }}
        >
          -30 sec
        </button>
      </div>
      <div>
        <span>Next Pomodoro {pomTimeSet}</span>
        <button
          onClick={() => {
            changeTime("pom", 5);
          }}
        >
          +5 min
        </button>
        <button
          onClick={() => {
            changeTime("pom", -5);
          }}
        >
          -5 min
        </button>
      </div>
      <div>
        <span>Next Short Break {shortTimeSet}</span>
        <button
          onClick={() => {
            changeTime("short", 1);
          }}
        >
          +1 min
        </button>
        <button
          onClick={() => {
            changeTime("short", -1);
          }}
        >
          -1 min
        </button>
      </div>{" "}
      <div>
        <span>Next Long Break {longTimeSet}</span>
        <button
          onClick={() => {
            changeTime("long", 5);
          }}
        >
          +5 min
        </button>
        <button
          onClick={() => {
            changeTime("long", -5);
          }}
        >
          -5 min
        </button>
      </div>
    </>
  );
}