/**
 * Created by pc hp on 27.11.2017.
 */
const mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    teachingGroups: {
                type: [
                    {
                        groupNumber:{type: Number}
                    }
                ]
            }
});

module.exports = teacherSchema;
