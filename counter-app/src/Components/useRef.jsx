import React from 'react'

export const UseRef = () => {
    
    // const [count, setCount] = React.useState(0);

    // const handleChange = (value) => {
    //     setCount((prev) => prev+1);
    //     console.log(value, count)
    // }

    const refData = React.useRef(null);

    const handleClick = () => {
        let value = refData.current.value;
        console.log(value)
    }

  return (
    <>
      <h1>useReff Hooks</h1>
      {/* <input type="text" name="" id="" onChange={(e) => handleChange(e.target.value)}  /> */}

      <input type="text" name="" id="" ref = {refData} />
      <button onClick={handleClick}>Click me </button>
    </>
  )
}

