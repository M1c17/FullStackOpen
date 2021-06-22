import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ];

  return (
    <div>
      <Header course={course}       />
      <Content partArray={content}  />
      <Total  exercises={content}   />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.partArray.map((el, i) => 
      <Part key={`part-${i}`} part={el.part} exercises={el.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises.reduce((total, currentValue) =>
       total = total + currentValue.exercises,0)}
       </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p> 
    </div>
  )
}

export default App