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
    <div className="todo-input">
      <input
        type="text"
        className="input-field"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd} className="add-btn">+</button>
    </div>
  );
};

export default TodoInput;
