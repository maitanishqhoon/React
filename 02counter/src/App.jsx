import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => {
    if (counter === 20) {
      setCounter(counter=20)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const reduceValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)
    } else {
      setCounter(counter=0)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={reduceValue}>Remove Value</button>
    </>
  )
}

export default App
