/**
 * Created by pc hp on 24.11.2017.
 */
'use strict';
const Student = require('../models/student');

/**
 * Create student
 * This endpoint allows to create new student.
 *
 * student Student Student object
 * returns Student
 **/
exports.createStudents = function(req, res) {

    let {firstName,lastName,currentGroup} = req.body;

        new Student({
            firstName,
            lastName,
            currentGroup
        })
            .save()
            .then(
                student => {
                    res.json({message: 'Student saved', student: student});
                    console.log('Student saved ', student);

                }
            );

}


/**
 *
 * returns List
 **/
exports.getStudents = function(req, res) {

        Student.find({}).then(
            students => {

                res.json({students: students});
            }
        )
   .catch(err =>{
        console.log('Unable to get students ', error);
    });

}

