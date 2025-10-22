/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Action";

export const Todo = () => {
    const refData = useRef(null);
    const dispatch = useDispatch();
    const data = useSelector((state)=> console.log(state));

    const handleClick = () => {
        let val = refData.current.value;
        dispatch({type: ADD_TODO, payload: val});
    }


    return(
        <>
            <input type="text" ref={refData} />
            <button onClick={handleClick}>Add Todo</button>
        </>
    )
}