const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    id:Number,
    title:String,
    text:String,
    url:String
});

module.exports = mongoose.model('blog', blogSchema);