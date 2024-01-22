import { useState } from "react";

const Todo = ({ todos, deleteHandler, completeHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {todos.map((todo) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "row", margin: "10px" }}
          >
            <h4
              style={{
                marginRight: "20px",
                color: todo.complete ? "red" : "black",
              }}
            >
              {todo.name}
            </h4>
            <button onClick={() => completeHandler(todo.id)}>complete</button>
            <button onClick={() => deleteHandler(todo.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
