import { useReducer, useState } from "react"
import { Reducer } from "./Reducer"
import { Decrement, DecrementByValue, Increment, IncrementByValue, Reset } from "./Action";

const initialVal = { count: 0 };

export const Counter = () => {

    const [state, dispatch] = useReducer(Reducer, initialVal);
    const [data, setData] = useState("");

    const handleNegativeVal = () => {
        return state.count - (data ? data : 5) < 0;
    }

    console.log(dispatch)
    return (
        <>
            <h1>Counter App by using useReducer</h1>

            <div>
                <h3>Count {state.count}</h3>
                <button onClick={() => dispatch(Increment)}>Increment</button>
                <button onClick={() => dispatch(Decrement)} disabled = {state.count === 0}>Decrement</button>
                <button onClick={()=> dispatch(Reset)}>Reset</button>
            </div>
            <div>
                <input type="number" onChange={(e) => setData(Number(e.target.value))} />
                <button onClick={()=> dispatch(IncrementByValue(data?data:5))}>Increment By Value</button>
                <button onClick={()=> dispatch(DecrementByValue(data?data:5))} disabled={handleNegativeVal()}>Decrement By Value</button>
            </div>
        </>
    )

}