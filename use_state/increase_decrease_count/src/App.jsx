import { useState } from 'react'
import './App.css'

export const App = () => {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev => prev + 1))
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prev => prev - 1))
    }
  }

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className='container'>
        <div className="count_container">
          <h1>Counter React App</h1>
          <h1>{count}</h1>
          <div className="count">
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount} disabled={count === 0}>Decrease Count</button>
          </div>
          <button onClick={resetCount} disabled={count === 0}>Reset Count</button>
        </div>
      </div>

    </>
  )
}
