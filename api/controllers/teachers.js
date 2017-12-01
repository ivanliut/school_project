/**
 * Created by pc hp on 27.11.2017.
 */

// get an instance of the router for api routes
const express   = require('express');
const teachersRoutes = express.Router();
const Teacher   = require('../models/teacher');
const teachers = require('../services/teachers');



// route to authenticate a user (POST http://localhost:8080/api/authenticate)
teachersRoutes.post('/create', teachers.createTeachers);

// route to show a random message (GET http://localhost:8080/api/)
teachersRoutes.get('/list', teachers.getTeachers);



module.exports = teachersRoutes;
