import { useState } from 'react'
import { CallingAPI, Counter, Debounce, ClassComponent, Clock, SimpleHOC, RenderProps, RenderTest, Timer } from './components'

function App() {
  const [componentToShow, setComponentToShow] = useState('others')

  if (componentToShow === 'testrender') {
    return (<RenderTest />)
  }

  return (
    <div className="App">
      <Counter />
      <hr />
      <Clock />
      <hr />
      <CallingAPI />
      <hr />
      <Timer />
      <hr />
      <Debounce />
      <hr />
      <ClassComponent />
      <hr />
      <ClassComponent />
      <hr />
      <SimpleHOC />
      <hr />
      <RenderProps />
    </div>
  );
}

export default App;
