import { useState } from "react";

const Form = ({ updateTodo }) => {
  const [name, setName] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    updateTodo({ id: Date.now(), name: name });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          value={name}
          placeholder="enter a todo"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
