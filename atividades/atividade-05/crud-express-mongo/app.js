var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//mongo conn
require('./db/mongo.connection');

var studentsMongo = require('./routes/student/student.routes');
var teachersMongo = require('./routes/teacher/teacher.routes');
//var students = require('./routes/student/StudentRoutes');
//var teachers = require('./routes/teacher/TeacherRoutes');

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

//app.use('/crud/students', students);
//app.use('/crud/teachers', teachers);
//endpoint para students
app.use('/crud/students', studentsMongo);
app.use('/crud/teachers', teachersMongo);
module.exports = app;
