import React, { useState } from 'react'

const Header = ({ title }) => (
  <h1>
    {title}
  </h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({ anecdote, votes }) =>  (
  <p>
  {anecdote} has {votes} vote(s)
  </p>
)

const MostVoted = (props) => {
  return (
    <div>
      <Header title="Anecdote with most votes" />
      {!props.hasVotes &&
        <p> No anecdotes have been vote on yet. </p>}
      {props.hasVotes &&
        <Anecdote anecdote={props.anecdote} votes={props.votes} />}
    </div> 
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const [hasVotes, setHasVotes] = useState(false)

  // const maxVote = votes.reduce(
  //   (acc, num, idx) => {
  //     if (num > acc.num) {
  //       acc.num = num
  //       acc.idx = idx
  //     }

  //     return acc
  //   },
  //   { num: 0 }
  // )
  const maxVote = Math.max(...votes)

  const maxVotedAnecdote = props.anecdotes[votes.indexOf(maxVote)]
  // const maxVotedAnecdote = props.anecdotes[maxVote.idx]

  const randSelect = (length) => {
    return Math.floor(Math.random() * length);
  }

  const setRandomAnecdote = () => {
    let rand = randSelect(props.anecdotes.length)

    while (rand === selected) {
      rand = randSelect(props.anecdotes.length)
    }
    setSelected(rand);
  }

  const incrementVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    setHasVotes(true)
  }

  const handleButtonClick = (type) => {
    switch (type) {
      case 'next' :
        setRandomAnecdote()
        break
      case 'vote':
        incrementVote()
      default:
        break
      }
  }

  return (
    <div>
      <Header title='Anecdote of the day' />
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={() => handleButtonClick('vote')} text='vote' />
      <Button onClick={() => handleButtonClick('next')} text='next anecdote'  />
      <MostVoted hasVotes={hasVotes} anecdote={maxVotedAnecdote} votes={maxVote} />
      
    </div>
  )
}

export default App
