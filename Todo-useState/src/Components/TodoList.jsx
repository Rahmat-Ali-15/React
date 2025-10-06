import { FaRegCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import "../App.css"

export const TodoList = ({ data, handleDel,handleEdit }) => {
  return (
    <>
      <div className="container" >
        {data.map((el) => (
          <div key={el.id} className="todo-list-container">
            <div>
              <FaRegCircleCheck className="check-icon" />
              <p>{el.text}</p>
                {
                  el.isEdited ? <input type="text" value={el.text} style={{textTransform: "capitalize"}} /> : <p>{el.text}</p>
                }
            </div>
            <div style={{ display: "flex" }}>
              <MdEdit className="edit-icon" onClick={()=> handleEdit(el.id)} />
              <MdDeleteForever className="del-icon" onClick={()=> handleDel(el.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
