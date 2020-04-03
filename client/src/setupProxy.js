//proxy for API calls and authentication from front end (port 3000) to our backend (port 2020)
//no need to import this file, automatically registered when dev server started
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/auth/google",
        createProxyMiddleware({target: 'http://localhost:2020'})
    );

    app.use(
        "/api",
        createProxyMiddleware({target: 'http://localhost:2020'})
    ); 
};