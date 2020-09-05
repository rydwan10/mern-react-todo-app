const { Router } = require('express');

const Todo = require('../model/Todo');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const AllTodo = await Todo.find();
        res.json(AllTodo);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const createTodo = await todo.save()
        res.json(createTodo);
    } catch (error) {
        if(error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});
router.delete('/:_id', async (req, res, next) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params._id);
        res.json({    
            message: `todo deleted successfully!`
        });
    } catch (error) {
        next(error)
    }
})

module.exports = router;
