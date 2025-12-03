import React from "react";

const expensiveOperation = (value) => {
  let start = Date.now();
  while (Date.now() - start <= value) {
    continue;
  }
  return true;
};

export const TodosItem = ({
  id,
  currentTodo,
  status,
  handleEdit,
  handleDelete,
}) => {
  console.log("🚀 ~ currentTodo:", currentTodo);
  expensiveOperation(200);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <h3>{id}</h3>
        <h3>{currentTodo}</h3>
        <h3>{status ? "true" : "false"}</h3>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </>
  );
};

const checkEquals = (prevValue, currentValue) => {
  return (
    prevValue.currentTodo === currentValue.currentTodo &&
    prevValue.status === currentValue.status
  );
};

// this is default export
export default React.memo(TodosItem, checkEquals);

// this is name export
// export const MemoizedTodosItem = React.memo(TodosItem,checkEquals)