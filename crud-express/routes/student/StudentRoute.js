var express = require('express');
var router = express.Router();
const StudentService = require('../../services/student/StudentService');

router.get('/list', (req, res, next) => {
    return res.json(StudentService.list());
});

router.post('/create', (req, res, next) => {
    const student = StudentService.create(req.body);
    return res.json(student);
});

router.patch('/update/:id', (req, res, next) => {
    const student = StudentService.update(req.params.id, req.body);
    return res.json(student);
});

router.delete('/delete/:id', (req, res, next) => {
    const ok = StudentService.delete(req.params.id);
    return res.json({ sucess: false });
    /*
    const ok = StudentService.delete(req.params._id);
    if (ok) return res.json({ sucess: true });
    else return res.json({ sucess: false });
    */
});

router.get('/retrieve/:id', (req, res, next) => {
    const student = StudentService.retrieve(req.params.id);
    return res.json(student);
});

module.exports = router;
