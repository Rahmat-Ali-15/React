import { useDispatch, useSelector } from "react-redux";
import { CANCEL_TODO, DELETE_TODO, EDIT_TODO } from "../Redux/Action";

export const TodoList = () => {
  const todoData = useSelector((state) => state.todos); // here todos is come form combineReducer in store.js

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch({ type: EDIT_TODO, payload: id });
  };

  const handleDelte = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const handleCancel = (id) => {
    dispatch({ type: CANCEL_TODO, payload: id });
  };

  return (
    <>
      <div className="todolist-container-div">
        {todoData.length === 0 ? (
          <p className="no-task-msg">You have not added any task yet.</p>
        ) : (
          todoData.map((el) => (
            <div
              key={el.id}
              className="todolist-content"
            >
              <p>{el.id}</p>
              {el.isEdit ? (
                <>
                  <input
                    type="text"
                    defaultValue={el.text}
                  />
                </>
              ) : (
                <>
                  <p>{el.text}</p>
                </>
              )}
              <div>
                {el.isEdit ? (
                  <>
                    <div className="list-btns">
                      <button
                        className="cancel-btn"
                        onClick={() => handleCancel(el.id)}
                      >
                        Cancel
                      </button>
                      <button className="confirm-btn">Confirm</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="list-btns">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(el.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelte(el.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
