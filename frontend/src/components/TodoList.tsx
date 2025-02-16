import React from 'react';
import TodoItem from './TodoItem.tsx';

interface Todo {
  _id: string;
  title: string;
  complete: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
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