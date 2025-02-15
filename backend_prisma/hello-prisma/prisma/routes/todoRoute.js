const express = require('express');
const { getTodos, createTodo, deleteTodo, toggleTodoStatus } = require('../controllers/todoController');

const router = express.Router();

router.get('/todos', getTodos);
router.post('/todo/new', createTodo);
router.delete('/todo/delete/:id', deleteTodo);
router.get('/todo/toggleStatus/:id', toggleTodoStatus);

module.exports = router;