var express = require('express');

module.exports = function() {
  var getLogIn = function(req,res) {
      res.render('login');
  };
  var getSignUp = function(req,res) {
      res.render('signUp');
  };
  return {
      getLogIn: getLogIn,
      getSignUp: getSignUp
  };
};