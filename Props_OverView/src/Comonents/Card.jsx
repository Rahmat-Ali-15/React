import React from 'react'
import "./Card.css"

export const Card = ({
    // default props
    name = "Not provided",
    age = "Not given",
    email = "Not specify",
}) => {
    return (
        <>
            <div className='card-div'>
                <h2>Name : {name}</h2>
                <h4>Age : {age}</h4>
                <h5>Email : {email}</h5>
            </div>
        </>
    )
}