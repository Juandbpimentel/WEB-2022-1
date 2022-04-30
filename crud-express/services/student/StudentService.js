var express = require('express');
var router = express.Router();
const StudentModel = require('../../models/student/StudentModel');

let students = [
    { name: 'Timmy', ira: 5.9, course: 'EC', _id: 0 },
    { name: 'Fulano', ira: 6.4, course: 'SI', _id: 1 },
    { name: 'Beltrano', ira: 10, course: 'DD', _id: 2 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 3 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 4 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 5 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 6 },
    { name: 'Timmy', ira: 5.9, course: 'EC', _id: 7 },
    { name: 'Fulano', ira: 6.4, course: 'SI', _id: 8 },
    { name: 'Beltrano', ira: 10, course: 'DD', _id: 9 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 10 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 11 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 12 },
    { name: 'Ciclano', ira: 7.5, course: 'ES', _id: 13 },
];
let _id = 14;

class StudentService {
    static create(data) {
        let student = new StudentModel(_id++, data.name, data.course, data.ira);
        _id++;
        students.push(student);
        return student;
    }

    static update(_id, data) {
        for (let s of students) {
            if (s._id == _id) {
                s.name = data.name;
                s.course = data.course;
                s.ira = data.ira;
                return s;
            }
        }
    }

    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1);
                return true;
            }
        }
    }

    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }
    }

    static list() {
        return students;
    }
}

module.exports = StudentService;
