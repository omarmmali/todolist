var express = require('express');
var todoRouter = express.Router();

module.exports = function() {

    var todoController = require('../controllers/todoController.js')();

    todoRouter.route('/')
    .get(todoController.loadTodoList);
    
    todoRouter.route('/addtask')
    .post(todoController.addTodo, function(req,res) {
        res.redirect('/todo');
    });
    
    todoRouter.route('/deletetask/:id')
    .get(todoController.deleteTodo, function(req,res) {
        res.redirect('/todo');
    });
    
    return todoRouter;
};