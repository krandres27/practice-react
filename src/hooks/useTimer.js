import { useState, useRef, useEffect } from 'react'

const useTimer = () => {
  const timerRef = useRef()
  const allowTimer = useRef(0)
  const [timer, setTimer] = useState({running: false})
  const [milliseconds, setMilliseconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    if (milliseconds === 0 && allowTimer.current === 1) {
      setSeconds(prevState => {
        return prevState < 60 ? prevState + 1 : 0
      })
    }
  }, [milliseconds])
  
  useEffect(() => {
    if (seconds === 0 && allowTimer.current === 1) {
      setMinutes(prevState => {
        return prevState < 60 ? prevState + 1 : 0
      })
    }
  }, [seconds])
  
  const startTimer = () => {
    setTimer({ running: true })
    allowTimer.current = 1
    timerRef.current = setInterval(() => {
      setMilliseconds(prevState => {
        return prevState <= 800 ? prevState + 100 : 0
      })
    }, 100);
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setTimer({ running: false })
  }
  
  const resetTimer = () => {
    clearInterval(timerRef.current)
    setTimer({ running: false })
    setMilliseconds(0)
    setSeconds(0)
    setMinutes(0)
    allowTimer.current = 0
  }

  return [timer, milliseconds, seconds, minutes, startTimer, stopTimer, resetTimer]
}

export default useTimer
