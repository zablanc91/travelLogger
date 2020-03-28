const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hello: 'how low?'});
});

app.listen(2020);