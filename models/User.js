//Model Class to represent Users Collection in MongoDB
//when a User signs in, need to save a record with their ID into the Collection

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//create the schema
mongoose.model('users', userSchema);