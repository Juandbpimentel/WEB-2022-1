var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var students = require('./routes/student/StudentRoute');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE, PATCH'
    );
    next();
});

app.use('/crud/students', students);

module.exports = app;
