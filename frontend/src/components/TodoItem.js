const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
      <div className="todo">
        <div
          onClick={() => onToggle(todo._id)}
          className={todo.complete ? "complete" : ""}
        >
          {todo.title}
        </div>
        <button className="delete" onClick={() => onDelete(todo._id)}>X</button>
      </div>
    );
  };
  
  export default TodoItem;
  