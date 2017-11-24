/**
 * Created by pc hp on 24.11.2017.
 */
const mongoose = require('mongoose');

const userSchema = require('../schemas/user');

const User = mongoose.model('User', userSchema);




module.exports = User;