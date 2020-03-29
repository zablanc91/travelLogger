const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//tell passport how to use our Strategy, 2nd argument to Google Strategy is arrow funct as callback
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (profileAccessToken, refreshToken, profile, done) => {
        //only concerned with profile infor (user's id) for our DB
        console.log('profile info: ', profile);
    })
);