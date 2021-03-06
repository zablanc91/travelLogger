//Model Class for the LogEntry Collection in MongoDB

const mongoose = require('mongoose');
const { Schema } = mongoose;

const logEntrySchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a name for the entry.'
    },
    description: String,
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        //lng then lat inside coordinates array
        coordinates: [{
            type: Number, 
            required: 'You must supply coordinates.'
        }],
        address: {
            type: String,
            required: 'You must supply an address.'
        }
    },
    image: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: 'You must supply an author.'
    }
});

mongoose.model('logEntries', logEntrySchema);