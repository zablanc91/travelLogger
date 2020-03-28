const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//tell passport how to use our Strategy, 2nd argument to Google Strategy is arrow funct as callback
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (profileAccessToken, refreshToken, profile, done) => {
        //only concerned with profile information, specifically id for our DB
        console.log('profile info: ', profile);
    })
);

//test route
app.get(
    '/', 
    (req, res) => {
        res.send({hello: 'how low?'});
    }
);

//route to start passport flow
app.get(
    '/auth/google', 
    passport.authenticate('google', {scope: ['profile', 'email']})
);

//route for auth callback, will run arrow funct in passport's 2nd arg above
app.get(
    '/auth/google/callback', 
    passport.authenticate('google')
);

app.listen(2020);