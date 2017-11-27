/**
 * Created by pc hp on 25.11.2017.
 */
const mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
        groupNumber: {
            type: Number,
            unique: true,
            required: true
        },
        daysAndTimes: {
            type: [
                {
                    day:{type: String},
                    time: {type: String}
                }
            ]
        }

    },

    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},

    });

groupSchema.virtual('students', {
    ref: 'Student',
    localField: 'groupNumber',
    foreignField: 'currentGroup'
});

module.exports = groupSchema;