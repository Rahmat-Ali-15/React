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

  const handleEdit = (id) => {
    dispatch(editTodoRequest());
    const updateEdit = todos
      .map((el) => (el.id === id ? { ...el, isEdit: !el.isEdit } : null))
      .filter((el) => el !== null);
    console.log("🚀 ~ updateEdit:", updateEdit);

    axios
      .patch(`${API}/${id}`, ...updateEdit)
      .then((res) => {
        dispatch(editTodoSuccess([id, res.data]));
      })
      .catch((err) => {
        dispatch(editTodoFailure(err));
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest());
    let deleteItem = todos.filter((dl) => dl.id !== id);
    axios
      .delete(`${API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteTodoSuccess(deleteItem));
      })
      .catch((err) => {
        dispatch(deleteTodoFailure(err));
      });
  };

  // Handle edit 2nd logic

  // const handleEdit = (id) => {
  //   dispatch(editTodoRequest());

  //   // Find the specific todo that's being edited
  //   const todoToUpdate = todos.find((el) => el.id === id);
  //   if (!todoToUpdate) {
  //     dispatch(editTodoFailure(new Error("Todo not found")));
  //     return;
  //   }

  //   // Create updated todo with toggled isEdit
  //   const updatedTodo = {
  //     ...todoToUpdate,
  //     isEdit: !todoToUpdate.isEdit,
  //   };

  //   // Update local state
  //   const updatedTodos = todos.map((el) => (el.id === id ? updatedTodo : el));

  //   // Send ONLY the specific todo to update, not the entire array
  //   axios
  //     .patch(`${API}/${id}`, updatedTodo)
  //     .then(() => {
  //       dispatch(editTodoSuccess(updatedTodos));
  //     })
  //     .catch((err) => {
  //       console.error("Edit failed:", err);
  //       dispatch(editTodoFailure(err));
  //     });
  // };

  // const handleDelete = (id) => {
  //   dispatch(deleteTodoRequest());

  //   const updateTodo = todos.filter((dl) => dl.id !== id);

  //   axios
  //     .delete(`${API}/${id}`)
  //     .then(() => {
  //       dispatch(deleteTodoSuccess(updateTodo));
  //     })
  //     .catch((err) => {
  //       dispatch(deleteTodoFailure(err));
  //     });
  // };

  // const hadnleCancel = (id) => {
  //   dispatch(editTodoRequest());
  //   const cancelItem = todos.map((cl) =>
  //     cl.id === id ? { ...cl, isEdit: !cl.isEdit } : cl
  //   );
  //   axios
  //     .patch(`${API}/${id}`, { isEdit: false })
  //     .then(() => {
  //       return dispatch(editTodoSuccess(cancelItem));
  //     })
  //     .catch((err) => dispatch(editTodoFailure(err)));
  // };

  useEffect(() => {
    getApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      <h1>Todo List</h1>
      {isError && <h1>Something went wrong...❌</h1>}
      {/* {todos.length > 0 &&
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
        ))} */}
      {todos.map((el) => {
        return (
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
            <p>{el.text}</p>

            {el.isEdit && el.isEdit ? (
              <>
                <div>
                  <button>Cancel</button>
                  <button>Delete</button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button onClick={() => handleEdit(el.id)}>Edit</button>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
