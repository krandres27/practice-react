import { useRef, useState } from 'react'

const getCurrentTime = start => {
  const end = new Date()
  const elapsed = Math.abs(start - end)

  return {
    milliseconds: parseInt(elapsed % 1000),
    seconds: Math.floor((elapsed / 1000) % 60),
    minutes: Math.floor(elapsed / (1000 * 60))
  }
}

const defaultTime = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
}

const useClock = () => {
  const [time, setTime] = useState(defaultTime)
  const [isCountdown, setIsCountdown] = useState(false)
  const stopwatch = useRef()

  const startTimer = () => {
    let start = new Date()

    if (isCountdown) {
      start = start.setHours(start.getHours() + 1);
    }

    stopwatch.current = setInterval(() => {
      setTime(getCurrentTime(start))
    }, 100);
  }

  const stopTimer = () => clearInterval(stopwatch.current)

  const resetTimer = () => {
    setTime(defaultTime)
    clearInterval(stopwatch.current)
  }

  return {
    time,
    isCountdown,
    setIsCountdown,
    actions: {
      startTimer,
      stopTimer,
      resetTimer,
    },
  };
}

export default useClock
