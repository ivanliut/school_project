/**
 * Created by pc hp on 25.11.2017.
 */
// get an instance of the router for api routes
const express   = require('express');
const groupsRoutes = express.Router();
const Group   = require('../models/group');
const groups = require('../services/groups');


groupsRoutes.post('/create', groups.createGroups);

groupsRoutes.get('/list', groups.getGroups);



module.exports = groupsRoutes;
