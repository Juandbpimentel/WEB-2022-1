var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: { type: String, required: true, max: 200 },
    salary: { type: Number, required: true },
    university: { type: String, required: true, max: 200 },
    degree: { type: String, required: true, max: 200 },
});

var TeacherModel = mongoose.model('Teachers', TeacherSchema);

module.exports = TeacherModel;
