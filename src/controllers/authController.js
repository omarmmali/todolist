var authModel = require('../models/authModel.js')();
var passport = require('passport');

module.exports = function () {
    var signUp = function (req, res) {
        authModel.insert(req.body);
        req.login(req.body, function () {
            res.redirect('/todo');
        });
    };
    var logIn = passport.authenticate('local', {
        failureRedirect: '/lead/logIn'
    });
    
    return {
        logIn: logIn,
        signUp: signUp
    };
};