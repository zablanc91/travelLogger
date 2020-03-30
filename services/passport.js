const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

//fetch the User Collection from DB
const User = mongoose.model('users');

//tell passport how to use our Strategy, 2nd argument to Google Strategy is arrow funct as callback
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (profileAccessToken, refreshToken, profile, done) => {
        //only concerned with profile info, save User's id to the DB
        new User({googleId: profile.id}).save();
        console.log('saved: ', profile.id);
    })
);