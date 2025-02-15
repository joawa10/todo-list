import axios from "axios";

const BASE_URL = "http://localhost:4001/api";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/todos`);
    return res.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const addTodo = async (title) => {
  try {
    const res = await axios.post(`${BASE_URL}/todo/new`, { title });
    return res.data;
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/todo/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
