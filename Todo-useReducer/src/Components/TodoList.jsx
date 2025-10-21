import { DELETE_TODO, EDIT_TODO } from "../UseReducer/Action";

export const TodoList = ({ state,dispatch }) => {

    const handleDel = (id) => {
        console.log("🚀 ~ id:", id);
        dispatch({ type: DELETE_TODO, payload: id });
    }
    const handleEdit = (id) => {
        return [
        dispatch({type: EDIT_TODO, payload: id})
    ];
    }

  return (
    <>
      <h1>Todo List</h1>
      {state.map((el) => (
        <div
          key={el.id}
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{el.id}</p>
          <p>{el.todoText}</p>
          <div style={{display: "flex",gap: "15px"}}>
            <button onClick={()=> handleEdit(el.id)}>Edit</button>
            <button onClick={()=>handleDel(el.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};
