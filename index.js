const express = require('express');
const app = express();

//needed so authRoutes can have access to app
require('./routes/authRoutes')(app);

require('./services/passport');

//test route at root
app.get(
    '/', 
    (req, res) => {
        res.send({hello: 'how low?'});
    }
);

app.listen(2020);