import React from 'react'
import { UseRef } from './Components/useRef';

const App = () => {
  let [count, setCount] = React.useState(0);

  const increaseCount = ()=> {
    setCount((prev) => prev+1)
  }
  const decreaseCount = ()=> {
    setCount((prev) => prev-1)
  }
  return (
    <>
      <h1>Counter {count}</h1>
      <button  onClick={increaseCount}>Increase</button>
      <button disabled={count <=0} onClick={decreaseCount}>Decrease</button>
      <UseRef />
    </>
  )
}

export default App
