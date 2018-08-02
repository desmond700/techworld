
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema({
	name: String,
	manufacturer: String,
	model: String,
	Model_Year: String,
    type: String,
	img: String,
    price: String,
	specs:{
		Screen_Technology: String,
        WiFi: String,
        Speakers: String,
        Panel_Type: String,
        Display_Size: String,
        Headphone_Jack: String,
        Image_Aspect_Ratio: String,
        Display_Resolution: String,
        VGA_Port: String,
        Refresh_Rate: String,
        Includes_Remote: String,
        ThreeD_Ready: String
	},
	bulletpoints:{
		point1: String,
		point2: String,
		point3: String,
		point4: String,
		point5: String,
	}
});

module.exports = mongoose.model('tv', productsSchema, 'products');