import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, deleteTodo, toggleTodoStatus } from "./services/todoService";

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

  const handleToggleTodo = async (id) => {
    await toggleTodoStatus(id);
    fetchTodos();
  };

  return (
    <div className="App">
      <TodoInput onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
