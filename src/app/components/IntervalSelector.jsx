"use client"
import { useState} from "react";


export default function IntervalSelector({changeTime, pomTimeSet, shortTimeSet, longTimeSet}) {

  return (
    <>
      <h1>Interval picker </h1>
      <div>
        <span>Next Pomodoro {pomTimeSet}</span>
        <button
          onClick={() => {
            changeTime("pom", 5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            changeTime("pom", -5);
          }}
        >
          -5
        </button>
      </div>
      <div>
        <span>Next Short Break {shortTimeSet}</span>
        <button
          onClick={() => {
            changeTime("short", 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            changeTime("short", -1);
          }}
        >
          -1
        </button>
      </div>{" "}
      <div>
        <span>Next Long Break {longTimeSet}</span>
        <button
          onClick={() => {
            changeTime("long", 5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            changeTime("long", -5);
          }}
        >
          -5
        </button>
      </div>
    </>
  );
}