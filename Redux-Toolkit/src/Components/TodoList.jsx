import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../Reducer/TodoReducer";

export const TodoList = () => {
  const { item } = useSelector((state) => state.todo);
  console.log("🚀 ~ item:", item);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id))
  }
  console.log("🚀 ~ handleEdit:", handleEdit);

  return (
    <>
      {item.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <input type="checkbox" />
            <h3>{el.text}</h3>
            <button onClick={()=> handleEdit(el.id)}>Edit</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};
