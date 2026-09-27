import React, { useEffect, useState } from 'react'
import Greeting from './Greeting'

export default function App() {
  // name = "Aishwarya"
  let[name, setName] = useState("Aishwarya")
  const[count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count +1)
    }, 1000)
  }, [count])
  
  const update = () => {
    setName("React State")
  }

  let inc = () => {
    setCount(count + 1)
  }

  let dec = () => {
    setCount(count - 1)
  }

  let zero = () => {
    setCount(0)
  }
  let age = 21
  const skill = ["JavaScript", "Java", "Python", "SQL"]
  return (
    <div>
      <h1>Welcome to {name}!</h1>
      <button onClick={update}>Change Name</button>
      <br />
      <h1>The Count value is {count}</h1>
      <br />
      <button onClick={inc}>Count is {count}</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={zero}>Reset</button>
      <Greeting name = "Aishwarya" age = {age} items = {skill}/>
    </div>
  )
}