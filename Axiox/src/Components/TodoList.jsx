import { useEffect, useState } from "react";
import axios from "axios";

const getData = async (url) => {
    try {
        let res = await axios.get(url);
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const TodoList = () => {

    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    console.log(apiData)
    let api = `https://api-database-1.onrender.com/Todo`;

    const handleEdit = async (id) => {
        try {
            let updateEdit = {
                isEdit: true
            }
            let res = await axios.patch(`${api}/${id}`, updateEdit);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // setApiData(getData(api))
        // getData(api);

        const fetchData = async () => {
            try {
                let res1 = await getData(api);
                setApiData(res1);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();

    }, []);


    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>404Error...</h1>

    return (
        <>
            <h1>Todo List</h1>
            {
                apiData.map((el) => (
                    <div className="todoListTask" key={el.id}>
                        <input type="checkbox" name="checkBox" />
                        <h1>{el.todo}</h1>
                        <button className="btn-edit" onClick={() => handleEdit(el.id)}>Edit</button>
                        <button className="btn-del">Delete</button>
                    </div>
                ))
            }
        </>
    )

}