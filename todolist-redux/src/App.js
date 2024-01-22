import { useReducer, useState } from "react";
import "./App.css";

const ACTION = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
  COMPLETE_TODO: "complete_todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, { id: Date.now(), name: action.payload.name }];
    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTION.COMPLETE_TODO:
      return todos.map((todo) => {
        return todo.id !== action.payload.id
          ? todo
          : todo.complete
          ? { ...todo, complete: 0 }
          : { ...todo, complete: 1 };
      });
    default:
      return todos;
  }
};

function App() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return (
          <div>
            <h3 style={{ color: todo.complete ? "red" : "black" }}>
              {todo.name}
            </h3>
            <button
              onClick={() => {
                dispatch({
                  type: ACTION.COMPLETE_TODO,
                  payload: { id: todo.id },
                });
              }}
            >
              complete
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ACTION.DELETE_TODO,
                  payload: { id: todo.id },
                });
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
