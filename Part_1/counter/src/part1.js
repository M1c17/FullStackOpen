import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

export default App