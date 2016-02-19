var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authModel = require('../../models/authModel.js')();

module.exports = function () {
    
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (username, password, done) {
            var input = {
                username: username,
                password: password
            };
            authModel.find(input, function (err, user) {
                if (user.length!==0) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            });
        }));
};