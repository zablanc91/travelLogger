const express = require('express');
const keys = require('./config/keys');
const app = express();

//import models
//need to define User collection before requiring passport.js since it uses Users!
require('./models/User');

//services - helper modules
require('./services/passport');

const mongoose = require('mongoose');
mongoose.connect(
    keys.mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log('Error: ', err.stack));

//let routes have access to app
require('./routes/authRoutes')(app);

//test route at root
app.get(
    '/', 
    (req, res) => {
        res.send({hello: 'how low?'});
    }
);

app.listen(2020);