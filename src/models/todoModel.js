var express = require('express');
var sql = require('mssql');

module.exports = function () {

    var getTodoList = function (user, callback) {
        var request = new sql.Request();
        var queryString = "SELECT * from TASKS WHERE userID = '" + user.ID + "'";
        request.query(queryString, function (err, recordset) {
            callback(null, recordset);
        });
    };

    var addTask = function (user, taskName, taskDescription, callback) {
        var request = new sql.Request();
        var queryString;
        if (taskDescription.length) {
            queryString = "INSERT INTO TASKS (userID, taskName, taskDescription) values ('" + user.ID + "','" + taskName + "','" + taskDescription + "')";
        } else {
            queryString = "INSERT INTO TASKS (userID, taskName) values ('" + user.ID + "','" + taskName + "')";
        }
        request.query(queryString, function (err, recordset) {
            console.log('DONE!');
        });
    };
    
    var deleteTask = function(id) {
        var request = new sql.Request();
        var queryString = "DELETE FROM TASKS WHERE ID = "+id;
        request.query(queryString,function(err,recordset) {
           console.log("DONE!") 
        });
    }
    
    return {
        getTodoList: getTodoList,
        addTask: addTask,
        deleteTask:deleteTask
    };
};