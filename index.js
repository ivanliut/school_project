/**
 * Created by pc hp on 24.11.2017.
 */
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');

const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('./config'); // get our config file
const User   = require('./api/models/user'); // get our mongoose model
const Student   = require('./api/models/student'); // get our mongoose model

const apiRoutes = require('./api/controllers/users');
const studentsRoutes = require('./api/controllers/students');
const groupsRoutes = require('./api/controllers/groups');
const users = require('./api/services/users');
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.Promise = global.Promise;
mongoose.connect(config.database)
    .then(
        () => {
    console.log('Start Mongoose...');
});

app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
app.post('/authenticate', users.authenticate);


// route middleware to verify a token
app.use(users.verifyToken);


// apply the routes to our application
app.use('/students', studentsRoutes);
app.use('/users', apiRoutes);
app.use('/groups',  groupsRoutes);


// =======================
// start the server ======
// =======================
app.listen(port, () => {
    console.log('Magic happens at http://localhost:' + port);
});
