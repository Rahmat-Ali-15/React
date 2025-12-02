import React from "react";

// const expensiveOperation = (value) => {
//   let start = Date.now();
//   while (Date.now() - start <= value) {
//     continue;
//   }
//   return true;
// };

export const TodosItem = ({ id, currentTodo, status }) => {
  console.log("🚀 ~ currentTodo:", currentTodo);
//   expensiveOperation(200);

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
      </div>
    </>
  );
};

export default React.memo(TodosItem);
