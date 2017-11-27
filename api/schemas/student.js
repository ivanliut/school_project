/**
 * Created by pc hp on 24.11.2017.
 */

const mongoose = require('mongoose');

var studentSchema = mongoose.Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    currentGroup: {
        type: Number,
        ref: 'Group',
        required: 'You must supply group number for a student'}
});

module.exports = studentSchema;
