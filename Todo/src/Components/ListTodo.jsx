import React from 'react'

export const ListTodo = ({ props }) => {
    console.log(props)
    return (
        <>
            <h1 style={{"color": "white"}}>List Todo</h1>

            {
                props.map((el) => (
                    <div key={el.data} style={{"display" : "flex","justifyContent":"center","gap" : "100px", "width": "100%"}}>
                        <p style={{"color": "white"}}>{el.text}</p>
                        <div style={{"display" : "flex",  "width": "200px","gap" : "15px"}}>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}