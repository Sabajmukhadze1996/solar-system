import React from 'react'
import { useState, useEffect } from 'react'
import { Refresh } from './Refresh';

export const Clock = ({color, fontWeight, textAlign}) => {
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
    <div>
      <h2 style={{fontWeight: fontWeight, color: color, textAlign: textAlign}}>
        თარიღი: {time} 
      </h2>
      <h6 id="partOfTheDay" style={{fontWeight: fontWeight, color: color}}>
        დღის მონაკვეთი: {partOfTheDay}
        <Refresh />
      </h6>
    </div>
  )
}