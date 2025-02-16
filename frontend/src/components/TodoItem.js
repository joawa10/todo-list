const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <span
        onClick={() => onToggle(todo._id)}
        // className={todo.complete ? "completed" : "todo-text"}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo._id)} className="delete-btn">X</button>
    </div>
  );
};

export default TodoItem;
