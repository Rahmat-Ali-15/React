import React, { useState } from 'react'
import './App.css'

export const  App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(20);

  React.useEffect(() =>{
    console.log("-> Count always run :", count);
  });

  React.useEffect(() =>{
    console.log("-> Count have empty dependency: ", count);
  },[])

  React.useEffect(() =>{
    console.log("-> Count have some dependency :", count,"count2",count2);
  },[count,count2])

  return (
    <>
      <h1>Count_1 {count}</h1>
      <h1>Count_1 {count2}</h1>
      <button onClick={() => setCount((prev) => prev+1)}>+</button>
      <button onClick={() => setCount((prev) => prev-1)}>-</button>
      <button onClick={() => setCount2((prev) => prev+1)}>Count_2 Increment</button>
      <button onClick={() => setCount2((prev) => prev-1)}>Count_2 Decreament</button>
    </>
  )
}

export default App
