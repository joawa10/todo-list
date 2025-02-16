const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTodos = async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  res.json(newTodo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await prisma.todo.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedTodo);
};

const toggleTodoStatus = async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({
    where: { id: parseInt(id) },
  });
  const updatedTodo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: { complete: !todo.complete },
  });
  res.json(updatedTodo);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodoStatus,
};