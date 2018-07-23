
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    type: String,
    name: String
});

module.exports = mongoose.model('cart', cartSchema, 'cart');