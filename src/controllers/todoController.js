var todoModel = require('../models/todoModel.js')();

module.exports = function () {

    var loadTodoList = function (req, res) {
        todoModel.getTodoList(req.user, function (err, recordset) {
            res.render('todo', {
                tasks: recordset
            });
        });
    };

    var addTodo = function (req, res) {
        console.log(req.user);
        todoModel.addTask(req.user, req.body.taskName, req.body.taskDescription);
    }
    
    var deleteTodo = function(req,res) {
        todoModel.deleteTask(req.params.id);
    }

    return {
        loadTodoList: loadTodoList,
        addTodo: addTodo,
        deleteTodo:deleteTodo
    };
};