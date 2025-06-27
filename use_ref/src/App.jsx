import { useRef, useState } from 'react'
import './App.css'

export function App() {
  const [data, setData] = useState("");
  const inputValue = useRef(null);

  // const handleInput = () => {
  //   let values = inputValue.current.value;
  //   setData(values);
  // }
  // by using Enter key we get input value
  const handleInput = (e) => {
    if(e.key === "Enter"){
      let values = inputValue.current.value;
      setData(values);
      inputValue.current.value = "";
    }
  }
  console.log('data:', data);

  return (
    <>
      
      <h1>useRef Hooks {data}</h1>

      {/* here we use normal event to access the node of dom */}
      <input type="text" onChange={(e) => setData(e.target.value)} />

      {/* here we use hooks of useRef */}

      {/* by using Enter key we get input value */}
      <input type="text" ref = {inputValue} placeholder='useRef input' onKeyDown={(e) => handleInput(e)}/>

      {/* <input type="text" ref = {inputValue} placeholder='useRef input' />
      <button onClick={handleInput}>Click me to useRef</button> */}

    </>
  )
}
