/**
 * Created by pc hp on 27.11.2017.
 */
'use strict';
const Teacher = require('../models/teacher');

exports.createTeachers = function(req, res) {

    let {firstName,lastName,teachingGroups} = req.body;

    new Teacher({
        firstName,
        lastName,
        teachingGroups
    })
        .save()
        .then(
            teacher => {
                res.json({message: 'Teacher saved', teacher: teacher});
                console.log('Teacher saved ', teacher);

            }
        );

}


/**
 *
 * returns List
 **/
exports.getTeachers = function(req, res) {

    Teacher.find({}).then(
        teachers => {

            res.json({teachers: teachers});
        }
    )
        .catch(err =>{
            console.log('Unable to get teachers ', error);
        });

}

