import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  const decreaseByone = () => setCounter(counter - 1)

  console.log('rendering...', counter)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button 
        handleClick={setToZero}
        text='zero'
      />
      <Button 
        handleClick={decreaseByone}
        text='minus'
      />
    </div>
  )
}

// display the value of the counter
const Display = ({ counter }) => <div>{counter}</div>

// Button component for the button of the application
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

export default App