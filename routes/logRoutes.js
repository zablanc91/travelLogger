const mongoose = require('mongoose');
const LogEntry = mongoose.model('logEntries');
const multer = require('multer');
const jimp =  require('jimp');

module.exports = (app) => {

    //middleware for multer - storage and add the name of the file input from AddLog.js into req.file
    let multerOptions = {
        storage: multer.memoryStorage(),
        fileFilter(req, file, next) {
            const isPhoto = file.mimetype.startsWith('image/');
            if(isPhoto){
                next(null, true);
            }
            else{
                next({ message: 'Invalid file type. Needs to be an image.'}, false);
            }
        }
    };

    const upload = multer(multerOptions);

    //middleware using jimp
    const resizeAndSave = async (req, res, next) => {
        //skip if no file
        if(!req.file){
            next();
            return;
        }

        //resize, jimp.read needs a filepath or buffer
        const image = await jimp.read(req.file.buffer);
        await image.resize(400, 400);

        //write to folder in client
        await image.write(`./client/public/uploads/${req.file.originalname}`);
        //need to re-insert file name to body before saving to DB
        req.body.image = req.file.originalname;
        next();
    }

    //save new LogEntry record to DB
    app.post(
        '/api/add',
        upload.single('image'),
        resizeAndSave,
        async (req, res) => {
            //lng then lat inside coordinates array
            const logToMake = {
                name: req.body.name,
                description: req.body.description,
                location: {
                    coordinates: [req.body.lng, req.body.lat],
                    address: req.body.address
                },
                image: req.body.image,
                author: req.user._id
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

    //given a slug from URL, fetch the log with the matching name
    app.get('/api/:slug',
        async (req, res) => {
            const slugToName = req.params.slug.split('_').join(' ');
            const matchedLog =  await LogEntry.findOne({
                name: slugToName
            });
            res.send(matchedLog);
        }
    );
}