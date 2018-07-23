
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema({
	name: String,
    type: String,
	img: String,
    price: String
});

module.exports = mongoose.model('list', productsSchema, 'products');