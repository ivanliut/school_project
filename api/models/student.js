/**
 * Created by pc hp on 24.11.2017.
 */

const mongoose = require('mongoose');

const studentSchema = require('../schemas/student');

const Student = mongoose.model('Student', studentSchema);




module.exports = Student;

