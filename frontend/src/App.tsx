import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import { getTodos, addTodo, deleteTodo, toggleTodoStatus, editTodo } from "./services/todoService.ts";
import { Todo } from "./types/Todo";
import "./styles.css"; 

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); 

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async (title: string) => {
    const newTodo = await addTodo(title);
    if (newTodo) setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id: number) => {
    const deletedTodo = await deleteTodo(id);
    if (deletedTodo) setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  };

  const handleToggleTodo = async (id: number) => {
    await toggleTodoStatus(id);
    fetchTodos();
  };

  const handleEditTodo = async (id: number, title: string) => {
    const updatedTodo = await editTodo(id, title);
    if (updatedTodo) {
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    }
  };

  return (
    <div className="container">
      <div className="todo-wrapper">
        <h1 className="title">Todo App</h1>
        <TodoInput onAdd={handleAddTodo} />
        <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} onEdit={handleEditTodo} />
      </div>
    </div>
  );
}

export default App;