var express = require('express');
var leadRouter = express.Router();

module.exports = function () {
    
    var leadController = require('../controllers/leadController.js')();    
    
    leadRouter.route('/logIn')
        .get(leadController.getLogIn);
    
    leadRouter.route('/signUp')
        .get(leadController.getSignUp);
    
    return leadRouter;
};