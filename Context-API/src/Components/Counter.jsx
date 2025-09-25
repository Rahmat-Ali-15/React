import { useContext } from "react"
import { MyContext } from "../Context/ContextProvider";

export const Counter = () => {

    const {count, setCount} = useContext(MyContext);
    

    return(
        <>
            <h1>Count {count}</h1>
            <button onClick={()=> setCount((prev)=> prev+1) }>+</button>
            <button onClick={()=> setCount((prev)=> prev-1) }>-</button>
        </>
    )
}