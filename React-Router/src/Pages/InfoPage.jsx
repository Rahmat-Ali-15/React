import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { FetchData } from "../Api/single_page";

export const InfoPage = () => {

    const {userID} = useParams();
    const [data, setData] = useState(null);

    useEffect(()=> {
        const getData = async () => {
            try {
                const res = await FetchData(`https://reqres.in/api/users/${userID}`);
                setData(res.data.data);
            } catch (error) {
                console.log(error)
            }
            finally{
                console.log("finished the process!!")
            }
        };
        getData();
    },[userID]);

    if(!data) return <h2>Loading...</h2>

    return (
        <>
            <div key={data.id}>
                <img src={data.avatar} alt={data.first_name} />
                <h2>{data.email}</h2>
                <h3>{data.first_name}</h3>
                <h3>{data.last_name}</h3>
                <Link to="/single_page">Back</Link>
            </div>
        </>
    );
};