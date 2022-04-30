const TeacherModel = require('../../models/teacher/TeacherModel');

let Teachers = [
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
];

module.exports = class TeacherService {
    static create(data) {}
    static update(_id) {}
    static delete() {}
    static retrieve() {}
    static list() {}
};

let _id = 3;
