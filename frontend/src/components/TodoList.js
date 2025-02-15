import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {!todos.length ? (
        <p className="empty-message">No tasks added yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TodoList;
