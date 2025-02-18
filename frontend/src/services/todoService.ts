import axios from "axios";
import { Todo } from "../types/Todo";

const BASE_URL = "http://localhost:4001/api";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const res = await axios.get<Todo[]>(`${BASE_URL}/todos`);
    return res.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const addTodo = async (title: string): Promise<Todo | undefined> => {
  try {
    const res = await axios.post<Todo>(`${BASE_URL}/todo/new`, { title });
    return res.data;
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const deleteTodo = async (id: number): Promise<Todo | undefined> => {
  try {
    const res = await axios.delete<Todo>(`${BASE_URL}/todo/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const toggleTodoStatus = async (id: number): Promise<void> => {
  try {
    await axios.get(`${BASE_URL}/todo/toggleStatus/${id}`);
  } catch (error) {
    console.error("Error toggling todo status:", error);
  }
};

// frontend log
// todoService.ts:27 
//  DELETE http://localhost:4001/api/todo/delete/undefined 400 (Bad Request)
//  deleteTodo	@	todoService.ts:27
//  handleDeleteTodo	@	App.tsx:27
//  onClick	@	TodoItem.tsx:19
 
// backend server log
// Deleting todo with id: NaN
// Todo id is undefined