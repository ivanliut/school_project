/**
 * Created by pc hp on 24.11.2017.
 */
// get an instance of the router for api routes
const express   = require('express');
const studentsRoutes = express.Router();
const Student   = require('../models/student');
const students = require('../services/students');



// route to authenticate a user (POST http://localhost:8080/api/authenticate)
studentsRoutes.post('/create', students.createStudents);

// route to show a random message (GET http://localhost:8080/api/)
studentsRoutes.get('/list', students.getStudents);



module.exports = studentsRoutes;
