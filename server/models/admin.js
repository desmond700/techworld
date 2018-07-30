const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
	password: String
});

module.exports = mongoose.model('admin', userSchema, 'admins');