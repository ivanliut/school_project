/**
 * Created by pc hp on 25.11.2017.
 */
'use strict';
const Group = require('../models/group');

/**
 * Create student
 * This endpoint allows to create new group.
 *
 **/
exports.createGroups = function(req, res) {

    let {groupNumber,daysAndTimes} = req.body;
console.log(groupNumber);
    new Group({
        groupNumber,
        daysAndTimes
    })
        .save()
        .then(
            group => {
                res.json({message: 'Group saved', group: group});
                console.log('Group saved ', group);
            }
        );

}


/**
 *
 * returns List
 **/
exports.getGroups = function(req, res) {

    Group.find({})
        .populate('students')
        .then(
        groups => {

            res.json({groups: groups});
        }
    )
        .catch(err =>{
            console.log('Unable to get groups ', error);
        });

}

