const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
});


const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
