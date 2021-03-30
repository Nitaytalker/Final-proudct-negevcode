const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    id : String,
    birthdate : String,
    email : String,
    emailPassword : String,
    firstname : String,
    lastname : String
});

module.exports = mongoose.model('users', userSchema);