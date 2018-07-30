
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema({
	name: String,
	manufacturer: String,
	model: String,
    type: String,
	img: String,
    price: String,
	specs:{
		Screen_size: String,
        Touch_screen: String,
        Storage_type: String,
        Hard_drive_type: String,
        Hard_drive_capacity: String,
        Solid_state_drive_capacity: String,
        Graphics: String,
        System_memory: String,
        Processor_speed: String,
        Processor_model: String,
        Processor_model_number: String,
        Operating_system: String
	},
	bulletpoints:{
		point1: String,
		point2: String,
		point3: String,
		point4: String,
		point5: String,
	}
});

module.exports = mongoose.model('laptop', productsSchema, 'products');