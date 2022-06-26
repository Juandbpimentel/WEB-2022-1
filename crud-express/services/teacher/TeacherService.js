const TeacherModel = require('../../models/teacher/TeacherModel');

let teachers = [
    {
        name: 'Fulano Carvalho',
        _id: 0,
        salary: 10500,
        university: 'Universidade do Ceará',
        degree: 'Tecnologia da Informação',
    },
    {
        name: 'Ciclano Lima',
        _id: 1,
        salary: 8500,
        university: 'USP',
        degree: 'Inteligência Artificial',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 2,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 3,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 4,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 5,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 6,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
    {
        name: 'Beltrano Betâneo',
        _id: 7,
        salary: 4500,
        university: 'Pontífice Unicatólica do Rio de Janeiro',
        degree: 'Governança de TI',
    },
];

let _id = 8;

module.exports = class TeacherService {
    static create(data) {
        let teacher = new TeacherModel(
            _id++,
            data.name,
            data.salary,
            data.university,
            data.degree
        );
        teachers.push(teacher);
        return teacher;
    }
    static update(_id, data) {
        for (let t of teachers) {
            if (t._id == _id) {
                t.name = data.name;
                t.salary = data.salary;
                t.university = data.university;
                t.degree = data.degree;
                return t;
            }
        }
    }
    static delete(_id) {
        for (let i = 0; i < teachers.length; i++) {
            if (teachers[i]._id == _id) {
                teachers.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    static retrieve(_id) {
        for (let i = 0; i < teachers.length; i++) {
            if (teachers[i]._id == _id) {
                return teachers[i];
            }
        }
    }
    static list() {
        return teachers;
    }
};
