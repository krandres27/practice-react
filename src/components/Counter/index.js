import { useEffect, useState } from 'react'

const Counter = () => {
  const [counterNumber, setCounterNumber] = useState(0)
  const [test, setTest] = useState({ cosa: 'cosa' })

  const addHandler = () => {
    setCounterNumber(counterNumber => counterNumber + 1)
  }
  
  const awesomeHandler = () => {
    console.log('handler')
    test.cosa = 'hola'
    setTest({ cosa: 'hello' })
  }

  useEffect(() => {
    let notLog = false

    const cosa = new Promise(res => {
      setTimeout(() => {
        res('hello')
      }, 2000);
    })

    async function test() {
      cosa.then(res => {
          if (!notLog) {
            console.log(counterNumber)
          }
        })
    }

    test()

    return () => { notLog = true }
  }, [counterNumber])

  return (
    <div className='counter__container' onClick={awesomeHandler}>
      <p className='counter__title'>Counter: {counterNumber} {JSON.stringify(test)}</p>
      <button className='counter__btn' onClick={addHandler}>Add +1</button>
    </div>
  )
}

export default Counter;
