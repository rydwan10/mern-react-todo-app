const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('Todos', TodoSchema);

module.exports = Todo;