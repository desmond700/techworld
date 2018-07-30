
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
		WiFi: String,
        Bluetooth: String,
        Battery_Type: String,
        Back_up_Battery: String,
        Width: String,
        Height: String,
        Depth: String,
        Weight: String,
        NFC_Enabled: String,
        Sensor_Type: String,
        Effective_Pixels: String,
        Total_Pixels: String,
		Colour_Filter_System: String,
		LCD_Size: String,
		LCD_Resolution: String
	},
	bulletpoints:{
		point1: String,
		point2: String,
		point3: String,
		point4: String,
		point5: String,
	}
});

module.exports = mongoose.model('camera', productsSchema, 'products');