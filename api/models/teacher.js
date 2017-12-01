/**
 * Created by pc hp on 27.11.2017.
 */
const mongoose = require('mongoose');

const teacherSchema = require('../schemas/teacher');

const Teacher = mongoose.model('Teacher', teacherSchema);


module.exports = Teacher;
