var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

module.exports = function () {
    
    var authController = require('../controllers/authController.js')();
    
    authRouter.route('/logIn')
        .post(authController.logIn, function (req, res) {
            res.redirect('/todo');
        });
    
    authRouter.route('/signUp')
        .post(authController.signUp);
    
    return authRouter;
};