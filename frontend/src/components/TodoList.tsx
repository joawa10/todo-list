import React, { useState } from "react";
// import TodoItem from "./TodoItem.tsx";
import { Todo } from "../types/Todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle, onEdit }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const handleEdit = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleSave = (id: number) => {
    onEdit(id, editTitle);
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => onToggle(todo.id)}
          />
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{ textDecoration: todo.complete ? "line-through" : "none" }}
                onClick={() => onToggle(todo.id)}
              >
                {todo.title}
              </span>
              <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;