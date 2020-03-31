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

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    //on log out, take the cookie and get rid of user id
    //also need to send response so the browser terminate the session
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
}