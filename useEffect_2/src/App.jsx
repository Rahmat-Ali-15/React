import React from 'react'
import './App.css'

export function App() {

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(10);

  React.useEffect(() => {
    console.log("Always run", count1);
  });

  React.useEffect(() => {
    console.log("Count1 have empty depedency", count1);
  },[]);

  React.useEffect(() => {
    console.log("Count1 have some depedency", count2);
  },[count2]);

  return (
    <>
      <h1>Count_1 {count1}</h1>
      <h1>Count_2 {count2}</h1>
      <button onClick={()=> setCount1((prev)=> prev-1)}>-</button>
      <button onClick={()=> setCount1((prev)=> prev+1)}>+</button>
      <button onClick={()=> setCount2((prev)=> prev-1)}>Count_2 decrement</button>
      <button onClick={()=> setCount2((prev)=> prev+1)}>Count_2 increment</button>
    </>
  )
}

