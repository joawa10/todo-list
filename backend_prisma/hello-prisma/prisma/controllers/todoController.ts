import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface CreateTodoRequest extends Request {
  body: {
    title: string;
  };
}

interface TodoParams {
  id: number;
}

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: CreateTodoRequest, res: Response): Promise<void> => {
  try {
    const { title } = req.body;
    const newTodo = await prisma.todo.create({
      data: { title },
    });
    res.json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const deleteTodo = async (req: Request<TodoParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    console.log("Deleting todo with id:", id); // Debug log
    if (!id) {
      console.error("Todo id is undefined");
      res.status(400).json({ error: "Todo id is required" });
      return;
    }
    const parsedId = Number(id); //parse id
    if (isNaN(parsedId)) {
      console.error("Todo id is not a valid number");
      res.status(400).json({ error: "Todo id must be a valid number" });
      return;
    }
    const deletedTodo = await prisma.todo.delete({
      where: { id: parsedId },
    });
    res.json(deletedTodo);
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

export const toggleTodoStatus = async (req: Request<TodoParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    console.log("Toggling status for todo with id:", id); // Debug log
    if (!id) {
      console.error("Todo id is undefined");
      res.status(400).json({ error: "Todo id is required" });
      return;
    }
    const todo = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });
    if (todo) {
      const updatedTodo = await prisma.todo.update({
        where: { id: Number(id) },
        data: { complete: !todo.complete },
      });
      res.json(updatedTodo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.error("Error toggling todo status:", error);
    res.status(500).json({ error: "Failed to toggle todo status" });
  }
};

export const editTodo = async (req: Request<TodoParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    console.log("Editing todo with id:", id); // Debug log
    if (!id) {
      console.error("Todo id is undefined");
      res.status(400).json({ error: "Todo id is required" });
      return;
    }
    const parsedId = Number(id); // parse id
    if (isNaN(parsedId)) {
      console.error("Todo id is not a valid number");
      res.status(400).json({ error: "Todo id must be a valid number" });
      return;
    }
    const updatedTodo = await prisma.todo.update({
      where: { id: parsedId },
      data: { title },
    });
    res.json(updatedTodo);
  } catch (error) {
    console.error("Error editing todo:", error);
    res.status(500).json({ error: "Failed to edit todo" });
  }
};