import { useState, useEffect } from 'react'

const Counter = ({render}) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div>
      {render({counter, setCounter})}
    </div>
  )
}

const ClickCounter = ({ counter, setCounter }) => {
  return (
    <div>
      <p>Button has been clicked {counter} times</p>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
    </div>
  )
}

const HoverCounter = ({ counter, setCounter }) => {
  return (
    <div>
      <p>Button has been hovered {counter} times</p>
      <button onMouseOver={() => setCounter(prev => prev + 1)}>Increment</button>
    </div>
  )
}

const CommonComponent = () => {
  return (
    <div>
      <Counter render={ClickCounter} />
      <Counter render={HoverCounter} />
    </div>
  )
}

export default CommonComponent
