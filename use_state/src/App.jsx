import { useState } from 'react'
import './App.css'

import { Child } from './Components/Child'

export const App = () => {
  const [data, setData] = useState(0);

  const handleCount = () =>{
    setData((prev) => prev + 1)
  }

  return (
    <>
      <h1>Hello UseState</h1>
      <h3>This is from App.jsx {data}</h3>
      <Child props = {data} sendFunc = {handleCount}/>
      <button onClick={handleCount}>App click</button>
    </>
  )
}

