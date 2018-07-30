
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
		Bluetooth: String,
        Memory-Built-in: String,
        CPU: String,
        RAM_Size: String,
        SIM_Card: String,
        Battery-Talk_Time: String,
        Battery_Type: String,
        Supported_Network_Bands: String,
        NFC: String,
        Headphone_Jack: String,
        Rear_Camera_Resolution: String,
        Front_Video_Capture_Resolution: String,
		Camera_Flash: String,
		Display_Resolution: String,
		Display_Size: String,
		Fingerprint_Scanning: String,
		Operating_system: String,
		Dimensions_(cm): String,
		Dimensions_(in): String,
		Weight: String
	},
	bulletpoints:{
		point1: String,
		point2: String,
		point3: String,
		point4: String,
		point5: String,
	}
});

module.exports = mongoose.model('cellp', productsSchema, 'products');