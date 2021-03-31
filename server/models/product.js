const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id: Number,
    img:[ String ],
    name: String,
    price: Number,
    star: Number,
    text:String,
    category:String,
    searchkey:[String]
});

module.exports = mongoose.model('products', productSchema);