
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
		Part_Number	: String,
        Scanner_Resolution: String,
        Number_Of_Items: String,
        Display_Technology: String,
        Display_Size: String,
        Display_Type: String,
        Image_Aspect_Ratio: String,
        Are_Batteries_Included: String,
        Batteries_Required: String,
        Refresh_Rate: String,
        Includes_Remote: String,
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

module.exports = mongoose.model('tv', productsSchema, 'products');