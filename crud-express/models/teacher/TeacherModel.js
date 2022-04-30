module.exports = class TeacherModel {
    constructor(_id, name, salary, university, degree) {
        this._id = _id;
        this.name = name;
        this.salary = salary;
        this.university = university;
        this.degree = degree;
    }
};
