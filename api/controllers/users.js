/**
 * Created by pc hp on 24.11.2017.
 */

// get an instance of the router for api routes
const express   = require('express');
const apiRoutes = express.Router();
const User   = require('../models/user');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../../config'); // get our config file

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// TODO: route middleware to verify a token

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
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


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
        firstName: req.body.firstName
    })
        .then(
           (user) => {

                if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) {

                    // check if password matches
                    if (user.password != req.body.password) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {

                        // if user is found and password is right
                        // create a token with only our given payload
                        // we don't want to pass in the entire user since that has the password
                        const payload = {
                            admin: user.adminRight
                        };
                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: 1440 // expires in 24 hours
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }

                }

            }
        );
});



module.exports = apiRoutes;
