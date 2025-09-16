import React from 'react'
import { ListTodo } from './ListTodo'
import "../Components/AddTodo.css"

export const AddTodo = () => {

  const [data, setData] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleFunck = () => {
    if (text.trim() === "") return;

    let todo = {
      id: Date.now(),
      text,
      isEdited: false,
      isCheck: false
    }

    setData([...data, todo]);
    localStorage("todo", JSON.stringify("setData"))
  }

  return (
    <>
      <div className='addTodo-container'>
        <h1 style={{"color": "white"}}>Todo</h1>
        <div>
          <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter the todo' />
          <button onClick={handleFunck}><span class="text">Add Todo</span></button>
        </div>
      </div>
      <ListTodo props={data} />
    </>
  )
}