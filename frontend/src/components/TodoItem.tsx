import React, { useState } from "react";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editTitle);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.complete}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span
          className={`todo-text ${todo.complete ? "completed" : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.title}
        </span>
      )}
      {isEditing ? (
        <button className="save-btn" onClick={handleSave}>Save</button>
      ) : (
        <>
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;