// import React, { memo, useState } from "react";
// import { useRender } from '../../hooks'

// function getRandomHEX() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function Header() {
//   const [color, setColor] = useState("#111");
//   const count = useRender();
//   return (
//     <header style={{ backgroundColor: color }}>
//       <p>Header component has re-rendered {count} times</p>
//       <button onClick={() => setColor(getRandomHEX())}>Click</button>
//     </header>
//   );
// }

// function _Footer() {
//   const count = useRender();
//   return (
//     <footer>
//       <p>Footer component has re-rendered {count} times</p>
//     </footer>
//   );
// }

// const Footer = memo(_Footer)

// function App() {
//   const count = useRender();
//   const [counter, setCounter] = useState(0)
//   return (
//     <>
//       <Header />
//       <main>
//         <p>Hey, nice to see you again 👋🏼, this is the app counter {counter}</p>
//         <button onClick={() => setCounter(prev => prev + 1)}>increment counter</button>
//         <p>The App component has re-rendered {count} times</p>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState, Component, useEffect } from "react";

const getData = () => new Promise((res, rej) => {
  setTimeout(() => res('hola'), 3000)
})

function TestUseState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(count)
    }, 1000);
  }, [])
  
  const getCounter = () => {
    function fetchData() {
        getData().then((res) => {
          console.log(count)
          setCount(count + 1)
        })
    }
    
    fetchData()
  }

  return (
    <div>
      <p>useState api</p>
      <p>Count: {count} <button onClick={getCounter}>add</button></p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TestUseState />
      </div>
    );
  }
}

export default App
