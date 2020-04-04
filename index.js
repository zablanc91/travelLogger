const express = require('express');
const keys = require('./config/keys');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');

//import models
//need to define User collection before requiring passport.js since it uses Users!
require('./models/User');
require('./models/LogEntry');

//services - helper modules
require('./services/passport');
//put form values in req.body
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true,
useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB.');
    })
    .catch((err) => {
        console.log('Error: ', err.stack);
    });

//cookie lasts 30 days (in milliseconds)
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

//tell Passport to use cookies
app.use(passport.initialize());
app.use(passport.session());


//let routes have access to app
require('./routes/authRoutes')(app);
require('./routes/logRoutes')(app);

app.listen(2020);