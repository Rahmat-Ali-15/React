import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  editTodoFailure,
  editTodoRequest,
  editTodoSuccess,
  getFailureTodo,
  getRequestTodo,
  getSuccessTodo,
} from "../Redux/todos/Action";
import axios from "axios";
import { useEffect } from "react";

const API = import.meta.env.VITE_API;

export const TodoList = () => {
  const dispatch = useDispatch();

  const { todos, isError, isLoading } = useSelector((state) => state.todo);

  const getApiCall = () => {
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch((err) => dispatch(getFailureTodo(err)));
  };

  useEffect(() => {
    getApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (id) => {
    dispatch(editTodoRequest());

    // Find the specific todo that's being edited
    const todoToUpdate = todos.find((el) => el.id === id);
    if (!todoToUpdate) {
      dispatch(editTodoFailure(new Error("Todo not found")));
      return;
    }

    // Create updated todo with toggled isEdit
    const updatedTodo = {
      ...todoToUpdate,
      isEdit: !todoToUpdate.isEdit,
    };

    // Update local state
    const updatedTodos = todos.map((el) => (el.id === id ? updatedTodo : el));

    // Send ONLY the specific todo to update, not the entire array
    axios
      .patch(`${API}/${id}`, updatedTodo)
      .then(() => {
        dispatch(editTodoSuccess(updatedTodos));
      })
      .catch((err) => {
        console.error("Edit failed:", err);
        dispatch(editTodoFailure(err));
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest());

    const updateTodo = todos.filter((dl) => dl.id !== id);

    axios
      .delete(`${API}/${id}`)
      .then(() => {
        dispatch(deleteTodoSuccess(updateTodo));
      })
      .catch((err) => {
        dispatch(deleteTodoFailure(err));
      });
  };

  const hadnleCancel = (id) => {
    dispatch(editTodoRequest());
    const cancelItem = todos.map((cl) =>
      cl.id === id ? { ...cl, isEdit: !cl.isEdit } : cl
    );
    axios
      .patch(`${API}/${id}`, {isEdit: false})
      .then(() => {
        return dispatch(editTodoSuccess(cancelItem));
      })
      .catch((err) => dispatch(editTodoFailure(err)));
  };

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      <h1>Todo List</h1>
      {isError && <h1>Something went wrong...❌</h1>}
      {todos.length > 0 &&
        todos.map((el) => (
          <div
            key={el.id}
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <input type="checkbox" />
            <p>{el.id}</p>
            {el.isEdit ? (
              <>
                <input
                  type="text"
                  defaultValue={el.text}
                />
                <button onClick={() => hadnleCancel(el.id)}>Cancel</button>
                <button>Confirm</button>
              </>
            ) : (
              <>
                <p>{el.text}</p>
                <div>
                  <button onClick={() => handleEdit(el.id)}>Edit</button>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
    </>
  );
};
