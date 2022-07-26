import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';



export default function App() {
  const updateClock = () => {
  const today = new Date();
    return {
      hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
      minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
      seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
      session: today.getHours() >= 12 ? 'pm' : 'am'
    };
  }

  const [clock, setClock] = useState(updateClock())
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() =>{
    setClock(updateClock());
    setTicks((prevTicks => prevTicks + 1))
    }, 1000);
    return () => {
      clearInterval(intervalID);
    }
  }, [updateClock])

  return (
    <>
      <span>{ticks}</span>
      <Clock
          message={'ex05: useEffect Hook example'}
          hours={clock.hours}
          minutes={clock.minutes}
          seconds={clock.seconds} 
          session={clock.session} />
    </>
  );
}