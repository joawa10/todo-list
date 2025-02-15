import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todos-list">
      {!todos.length ? (
        <h3 style={{ textAlign: "center" }}>No Todo Data</h3>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TodoList;
