import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(props){
    return(
        <h1>{props.course}</h1>
    )
}

function Content(props){
    return(
        <div>
       <Part part={props.exercises.part1} exercise={props.exercises.exercises1}/>
       <Part part={props.exercises.part2} exercise={props.exercises.exercises2}/>
       <Part part={props.exercises.part3} exercise={props.exercises.exercises3}/>
       </div>
    )
}
function Total(props){
    return(
    <p>Number of exercises {props.total.exercises1 + props.total.exercises2 + props.total.exercises3}</p>
        )
}
function Part(props){
    return(
     <p>{props.part} {props.exercise}</p>
    )
}

function App(){
    // const defination for necessary information
    const course = "Half Stack application development"
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
           <Header course={course} />
           <Content exercises = {{part1:part1, exercises1:exercises1, part2:part2, exercises2:exercises2, part3:part3, exercises3: exercises3}} />
           <Total total={{exercises1:exercises1, exercises2:exercises2, exercises3:exercises3}} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
