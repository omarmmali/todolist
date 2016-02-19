var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sql = require('mssql');

var app = express();

var port = process.env.PORT || 5000;

//Database connection
var config = {
    user: 'sa',
    password: '',
    server: 'localhost\\MSSQLSERVER', // You can use 'localhost\\instance' to connect to named instance 
    database: 'todolist',

    options: {
        encrypt: false // Use this if you're on Windows Azure 
    }
};

sql.connect(config, function (err) {
    console.log("Database connected!");
});

//Environment variables
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
    secret: 'todolist'
}));

require('./src/config/passport.js')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');

var authRouter = require('./src/routes/authRoutes.js')();
var leadRouter = require('./src/routes/leadRoutes.js')();
var todoRouter = require('./src/routes/todoRoutes.js')();

app.use('/auth', authRouter);
app.use('/lead', leadRouter);
app.use('/todo', todoRouter);


app.get('/', function (req, res) {
    res.render('landingpage');
});

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});