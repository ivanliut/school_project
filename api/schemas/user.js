/**
 * Created by pc hp on 24.11.2017.
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    adminRight: Boolean
});

module.exports = userSchema;
