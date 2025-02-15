import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.trim()) {
      onAdd(todo);
      setTodo("");
    }
  };

  return (
    <div className="todo-input-wrapper">
      <input
        className="todo-input-bar"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a New Todo"
      />
      <button className="add-button" onClick={handleAdd}>+</button>
    </div>
  );
};

export default TodoInput;
