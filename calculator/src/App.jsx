import { useState } from 'react'
import './App.css'

import { Calculator } from './Components/calculator';

export function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operators, setOperators] = useState("");
  

  return (
    <>
    <div className='container'>
      <input type="tel" name="first_number" id="" placeholder='Enter first number' onChange={(e)=> setNumber1(e.target.value)}/>
      <input type="text" name="Operator" id="" placeholder='Enter operator(+,-,*,/)'onChange={(e)=> setOperators(e.target.value)}/>
      <input type="tel" name="second_number" id="" placeholder='Enter second number' onChange={(e)=> setNumber2(e.target.value)}/>
    </div>
      <Calculator props = {{number1, operators, number2}}/>
    </>
  )
}
