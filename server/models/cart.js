
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    name: String,
    manufacturer: String,
    model: String,
    type: String,
    img: String,
    price: String,
    quantity: Number
});

module.exports = mongoose.model('cart', cartSchema, 'cart');