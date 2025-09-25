import { useContext } from "react"
// import { ContextProvider } from "../Context/ContextProvider"
import { MyContext } from "../Context/ContextProvider"; 

export const Dummy = () => {
    const {count} = useContext(MyContext);

    return(
        <>
            <h1>Dummy {count}</h1>
        </>
    )
}