import { useClock, useRender } from '../../hooks'

const Clock = () => {
  const {time, isCountdown, setIsCountdown, actions} = useClock()
  const [renders] = useRender()

  return (
    <div>
      <p>
        countdown: {renders}
        <input type="checkbox" value={isCountdown} onChange={() => setIsCountdown(!isCountdown)}/>
      </p>
      <p>{JSON.stringify(time)}</p>
      <button onClick={actions.startTimer}>Start</button>
      <button onClick={actions.stopTimer}>Stop</button>
      <button onClick={actions.resetTimer}>Reset</button>
    </div>
  )
}

export default Clock
