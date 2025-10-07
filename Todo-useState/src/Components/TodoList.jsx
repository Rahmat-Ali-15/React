import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

import "../App.css";
import { useRef } from "react";

export const TodoList = ({
  data,
  handleDel,
  handleEdit,
  handleCancel,
  handleConfirm,
}) => {
  const modelInput = useRef(null);

  const handleConfirm2 = (id) => {
    let texts = modelInput.current.value;
    handleConfirm(id, texts);
  };

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
                      ref={modelInput}
                      defaultValue={el.text}
                    />
                  </div>
                  <div className="btn-container">
                    <MdCancel
                      className="cancel-icon"
                      onClick={() => handleCancel(el.id)}
                    />
                    <GiConfirmed
                      className="confirm-icon"
                      onClick={() => handleConfirm2(el.id)}
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
