/**
 * Created by pc hp on 24.11.2017.
 */

// get an instance of the router for api routes
const express   = require('express');
const apiRoutes = express.Router();
const User   = require('../models/user');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../../config'); // get our config file
const users = require('../services/users');



// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', users.authenticate);


// route middleware to verify a token
apiRoutes.use(users.verifyToken);


// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!', payload: req.decoded });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
    User.find({})
        .then(
             (users) => {
                res.json(users);
            }
        );
});







module.exports = apiRoutes;
