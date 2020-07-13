//keys.js -- determine if in production or development environment, use appropriate keys
if(process.env.NODE_ENV === 'development') {
    module.exports = require('./dev');
}
else {
    module.exports = require('./prod');
}