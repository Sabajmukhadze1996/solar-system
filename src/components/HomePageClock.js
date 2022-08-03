import React from 'react'
import { useState, useEffect } from 'react';
import { GiClockwork } from "react-icons/gi"



export const HomePageClock = () => {
    let [time, setTime] = useState(new Date().toLocaleString("en-gb"));
    let [hours, setHours] = useState(new Date().getHours());
    let [partOfTheDay, setPartOfTheDay] = useState("");
   useEffect(() => {
       setInterval(() => {
          setTime(new Date().toLocaleString("en-gb"))
       }, 1000)
       setInterval(() => {
           if (hours >= 6 && hours <= 7) {
               setPartOfTheDay("განთიადი")
               setHours(new Date().getHours())
           } else if (hours > 7 && hours <= 10) {
               setPartOfTheDay("დილა")
               setHours(new Date().getHours())
           } else if (hours > 10 && hours <= 17) {
               setPartOfTheDay("შუა დღე")
               setHours(new Date().getHours())
           } else if (hours > 17 && hours <= 20) {
               setPartOfTheDay("საღამო")
               setHours(new Date().getHours())
           } else if (hours > 20 && hours <= 23) {
               setPartOfTheDay("ღამე")
               setHours(new Date().getHours())
           } else {
               setPartOfTheDay("შუა ღამე")
               setHours(new Date().getHours())
           }
       }, 1)
   }, [])
  return (
    <div className="text-white px-4">
     <div className="d-flex justify-content-center flex-column">
      <span className="d-flex justify-content-center mt-4">
        <GiClockwork color="white" size={60} />
      </span>
      <h3 style={{fontSize: "1.4rem"}} className="mt-5">თბილისის დრო</h3>
      <h1 style={{fontWeight: "600", fontSize: "1.4rem"}}>{time}</h1>
      <h2 style={{fontWeight: "600", fontSize: "1.4rem"}}>დღის მონაკვეთი: {partOfTheDay}</h2>
     </div>
    </div>
  )
}

