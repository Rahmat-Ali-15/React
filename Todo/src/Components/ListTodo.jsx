import React from "react";

import "../Components/ListTodo.css";

import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

export const ListTodo = ({ props, handleDel }) => {
  // console.log(props)

  return (
    <>
      <h1 style={{ color: "white" }}>Todo List</h1>

      {props.map((el, i) => (
        <div
          className="list-todo-container"
          key={i}
        >
          <div className="check-text-div">
            <FaRegCheckCircle className="check-icon" />
            <GoCheckCircleFill className="fill-check-icon" />
            <p className="input-text">{el.text}</p>
          </div>
          <div className="edit-del-div">
            <MdEdit className="edit-icon" />
            <MdDeleteForever
              className="del-icon"
              onClick={()=>handleDel(el.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};
