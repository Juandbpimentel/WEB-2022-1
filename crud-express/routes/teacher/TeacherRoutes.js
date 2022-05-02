var express = require('express');
const StudentService = require('../../services/student/StudentService');
var router = express.Router();

const TeacherService = require('../../services/teacher/TeacherService');

router.get('/list', (req, res, next) => {
    return res.json(TeacherService.list());
});

router.post('/create', (req, res, next) => {
    const teacher = TeacherService.create(req.body);
    return res.json(teacher);
});

router.patch('/update/:_id', (req, res, next) => {
    const teacher = TeacherService.update(req.params._id, req.body);
    return res.json(teacher);
});

router.delete('/delete/:_id', (req, res, next) => {
    const ok = TeacherService.delete(req.params._id);
    return ok ? res.json({ sucess: true }) : res.json({ sucess: false });
});

router.get('/retrieve/:_id', (req, res, next) => {
    const teacher = TeacherService.retrieve(req.params._id);
    return res.json(teacher);
});

module.exports = router;
