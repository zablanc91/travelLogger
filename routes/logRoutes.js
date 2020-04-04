const mongoose = require('mongoose');
const LogEntry = mongoose.model('logEntries');

module.exports = (app) => {
    //save new LogEntry record to DB
    app.post(
        '/api/add',
        async (req, res) => {
            //lng then lat inside coordinates array
            const logToMake = {
                name: req.body.name,
                description: req.body.description,
                location: {
                    coordinates: [parseInt(req.body.lng),parseInt(req.body.lat)],
                    address: req.body.address
                },
                image: req.body.image
            };
            const log = await new LogEntry(logToMake).save();
            res.redirect('/');
        }
    );

    //quick check on our LogEntry collection
    app.get('/api/logs',
        async (req, res) => {
            const logEntries = await LogEntry.find();
            res.send(logEntries);
        }
    );
}