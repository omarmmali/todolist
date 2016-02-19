 var sql = require('mssql');

module.exports = function () {
    
    var insert = function (user) {
        var queryString = "INSERT into USERS (USERNAME,PASSWORD,EMAIL) VALUES('" + user.username + "','" + user.password + "','" + user.email + "')";
        var request = new sql.Request();
        request.query(queryString, function (err, recordset) {
            if(err) {
                console.log(err);
            }
        });
    };
    
    var find = function (user,callback) {
        var queryString = "SELECT * FROM USERS WHERE EMAIL = '" + user.username + "' AND PASSWORD = '" + user.password + "'";
        var request = new sql.Request();
        request.query(queryString, function (err, recordset) {
            callback(null,recordset);
        });
    };
    
    return {
        find: find,
        insert: insert
    };
};