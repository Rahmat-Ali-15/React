import React from "react";
import axios from "axios"

const getData = async(api) => {

    try {
        let respond = await axios.get(api);
        console.log(respond.data)
    } catch (error) {
        console.log(error)
    }

    
}

export const ApiCall = () => {

    let url = `https://jsonplaceholder.typicode.com/todos`;

    React.useEffect(() => {
        getData(url)
    }, []);

    return(
        <>
            <h1>ApiCall</h1>
        </>
    )
}