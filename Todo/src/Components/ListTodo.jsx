import React from 'react'

export const ListTodo = ({ props }) => {
    console.log(props)
    return (
        <>
            <h1>List Todo</h1>

            {
                props.map((el) => (
                    <div key={el.data}>
                        <p>{el.text}</p>
                        <div style={{"display" : "flex"}}>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}