import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

import "../App.css";

export const TodoList = ({
  data,
  handleDel,
  handleEdit,
  setData,
  handleCancel,
  handleConfirm,
}) => {
  return (
    <>
      <div className="container">
        {data.map((el) => (
          <div
            key={el.id}
            className="todo-list-container"
          >
            <div>
              <input
                type="checkbox"
                className="check-box"
              />

              {el.isEdited ? (
                <div className="modal">
                  <div className="input-container">
                    <h4>Edit your Todo</h4>
                    <input
                      type="text"
                      value={el.text}
                      onChange={(e) => {
                        const updatedData = data.map((item) =>
                          item.id === el.id
                            ? { ...item, text: e.target.value }
                            : item
                        );
                        setData(updatedData);
                      }}
                    />
                  </div>
                  <div className="btn-container">
                    <MdCancel
                      className="cancel-icon"
                      onClick={() => handleCancel(el.id)}
                    />
                    <GiConfirmed
                      className="confirm-icon"
                      onClick={() => handleConfirm(el.id)}
                    />
                  </div>
                </div>
              ) : (
                <p>{el.text}</p>
              )}
            </div>
            <div
              style={{ display: "flex" }}
              className="edit-del-btns"
            >
              <MdEdit
                className="edit-icon"
                onClick={() => handleEdit(el.id)}
              />
              <MdDeleteForever
                className="del-icon"
                onClick={() => handleDel(el.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
