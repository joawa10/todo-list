import React from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;