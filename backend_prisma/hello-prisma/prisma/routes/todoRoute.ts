import express from 'express';
import { getTodos, createTodo, deleteTodo, toggleTodoStatus, editTodo } from '../controllers/todoController';

const router = express.Router();

router.get('/todos', getTodos);
router.post('/todo/new', createTodo);
router.delete('/todo/delete/:id', deleteTodo);
router.get('/todo/toggleStatus/:id', toggleTodoStatus);
router.put('/todo/edit/:id', editTodo);

export default router;