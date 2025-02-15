import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, deleteTodo } from "./services/todoService";
import "./styles.css"; 

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async (title) => {
    const newTodo = await addTodo(title);
    if (newTodo) setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    const deletedTodo = await deleteTodo(id);
    if (deletedTodo) setTodos(todos.filter((todo) => todo._id !== deletedTodo._id));
  };

  return (
    <div className="container">
      <div className="todo-wrapper">
        <h1 className="title">Todo App</h1>
        <TodoInput onAdd={handleAddTodo} />
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
}

export default App;