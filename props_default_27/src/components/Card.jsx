import React from 'react'

export const Card = ({
    name = "Not provided",
    age = "not given",
    email = "not specify",
}) => {
  return (
    <div
      style={{
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        border : "1px solid red",
        height : "160px",
        width : "300px",
      }}
    >

        <h2>name: {name}</h2>
        <h4>email: {email}</h4>
        <h5>age: {age}</h5>
    </div>
  )
}
