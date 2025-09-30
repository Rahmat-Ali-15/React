import { useEffect } from "react";
import axios from "axios";

const getData = async (url) => {
    try {
        let res = await axios.get(url);
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


export const TodoList = () => {

    let api = `https://api-database-1.onrender.com/Todo`;

    useEffect(()=>{
        getData(api);
    },[])

    return(
        <>
            <h1>Todo List</h1>
        </>
    )

}