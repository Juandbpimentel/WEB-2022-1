const TeacherModel = require('../../models/teacher/teacher.model');

class TeacherService {
    static list(req, res) {
        TeacherModel.find().then((teachers) => {
            res.status(200).json(teachers);
        });
    }

    static retrieve(req, res) {
        TeacherModel.findById(req.params.id).then((teacher) => {
            res.status(200).json(teacher);
        });
    }

    static create(req, res) {
        TeacherModel.create(req.body).then((teacher) => {
            res.status(201).json(teacher);
        });
    }

    static update(req, res) {
        TeacherModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).then((teacher) => {
            res.status(200).json(teacher);
        });
    }

    static delete(req, res) {
        TeacherModel.findByIdAndDelete(req.params.id).then((teacher) =>
            res.status(200).json(teacher)
        );
    }
}

module.exports = TeacherService;
