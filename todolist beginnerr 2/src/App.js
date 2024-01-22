import { useState } from "react";
import "./App.css";
import Form from "./component/Form/Form";
import Todo from "./component/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodo = (newValue) => {
    setTodos([...todos, newValue]);
  };

  const deleteHandler = (incomingId) => {
    setTodos(todos.filter((todo) => todo.id !== incomingId));
  };

  const completeHandler = (incomingId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id !== incomingId ? todo : { ...todo, complete: 1 };
      })
    );
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Form updateTodo={updateTodo} />
      <Todo
        todos={todos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
    </div>
  );
}

export default App;
