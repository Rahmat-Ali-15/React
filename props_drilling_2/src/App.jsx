import React from 'react';
import './App.css'
import { Child } from './components/Child'

export function Parent() {
  // let count = 1;
  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    setCount((prev) => prev+1)
  }
  const decreaseCount = () => {
    setCount((prev) => prev-11)
  }

  return(
    <>
      <h1>Parent</h1>
      <Child counts = {{count, increaseCount, decreaseCount}}/>
    </>
  )
}

