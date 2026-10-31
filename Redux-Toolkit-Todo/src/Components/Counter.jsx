import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "../Reducer/Reducer";


export const Counter = () => {
    // const data = useSelector((state) => state.value);
    const data = useSelector((state) => state.count);
    const dispatch = useDispatch()
    console.log("🚀 ~ data:", data);

    return (
        <>
            <h1>Counter {data}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}