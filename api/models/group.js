/**
 * Created by pc hp on 25.11.2017.
 */
const mongoose = require('mongoose');

const groupSchema = require('../schemas/group');

const Group = mongoose.model('Group', groupSchema);




module.exports = Group;
