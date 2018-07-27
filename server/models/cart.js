
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    name: String,
    model: String,
    type: String,
    img: String,
    price: String,
    
});

module.exports = mongoose.model('cart', cartSchema, 'cart');