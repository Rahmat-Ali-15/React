import React, { useEffect, useState } from 'react'

export const Calculator = ({props}) => {
    const [ans, setAns] = useState();

    let key = props.operators;

    useEffect(() => {
        switch(key){
            case "+":
                setAns(+props.number1 + +props.number2)
                break;
            case "-":
                setAns(+props.number1 - +props.number2)
                break;
            case "*":
                setAns(+props.number1 * +props.number2)
                break;
            case "/":
                setAns(+props.number1 / +props.number2)
                break;
            default:
                break;
        }
    }, [props.number1, key, props.number2   ])
  return (
    <>
      <h1>Calculator Ans : {ans}</h1>
    </>
  )
}

