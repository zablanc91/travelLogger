const passport = require('passport');

//need to export to index since we don't have app
module.exports = (app) => {

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
}