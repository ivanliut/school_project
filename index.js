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

const apiRoutes = require('./api/controllers/users');
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


app.get('/setup', function(req, res) {

    // create a sample user
    let nick = new User({
        firstName: 'Nick',
        lastName: 'Cerminara',
        password: 'password',
        adminRight: true
    });

    // save the sample user
    nick.save()
        .then(
            user => {
                console.log('User saved successfully', user);
                res.json({ success: true });
});

});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// =======================
// start the server ======
// =======================
app.listen(port, () => {
    console.log('Magic happens at http://localhost:' + port);
});
