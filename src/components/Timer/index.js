import { useTimer } from '../../hooks'

const Timer = () => {
  const [timer, milliseconds, seconds, minutes, startTimer, stopTimer, resetTimer] = useTimer()

  return (
    <div className="timer-container">
      <p>{minutes} : {seconds} : {milliseconds}</p>
      <button onClick={startTimer} disabled={timer.running}>Start</button>
      <button onClick={stopTimer} disabled={!timer.running}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer
