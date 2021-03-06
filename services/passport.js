const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

//fetch the User Collection from DB
const User = mongoose.model('users');

//after done is called, need to call serialiezeUser to make a cookie, give identifying info
passport.serializeUser((user, done) => {
    done(null, user.id)
});

//given cookie, need to find user
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

//tell passport how to use our Strategy, 2nd argument to Google Strategy is arrow funct as callback
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, async (profileAccessToken, refreshToken, profile, done) => {
        try{
            //only concerned with profile info, check to see if user is already in DB and if not then save
            const existingUser = await User.findOne({googleId: profile.id});
            if(existingUser){
                //already have record
                done(null, existingUser);
            }
            else{
                //don't have this User, make new record
                const user = await new User({googleId: profile.id}).save();
                done(null, user);
            }
        } catch(err){
            console.log(err);
        }

    })
);