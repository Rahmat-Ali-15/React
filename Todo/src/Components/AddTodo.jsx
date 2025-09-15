import React from 'react'
import { ListTodo } from './ListTodo'
import "../Components/AddTodo.css"

export const AddTodo = () => {

    const [data, setData] = React.useState([]);
    const [text, setText] = React.useState("");

    const handleFunck = () => {
        if(text.trim() === "") return;

        let todo = {
            id : Date.now(),
            text,
            isEdited : false,
            isCheck : false
        }

        setData([...data, todo]);
        localStorage("todo", JSON.stringify("setData"))
    }

  return (
    <>
    <div style={{ 
      "height" : "100vh",
      "width": "100%",
      "display" : "flex",
      "flexDirection":"column",
      "alignItems" : "center"
    }}>
        <h1>Todo</h1>
        <input onChange={(e)=> setText(e.target.value)} type="text" placeholder='Enter the todo' />
        <input onClick={handleFunck} type="button" value="Add Todo" />
    </div>
      <ListTodo props = {data} />
    </>
  )
}