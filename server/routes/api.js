

const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Cartcollection = require('../models/cart');
const Productscollection = require('../models/products');
const config = require('../config/db.js');

mongoose.Promise = global.Promise;
    mongoose.connect(config.db,{ useNewUrlParser: true }).then(
        () => {console.log('Database is connected')},
        err => {console.log('Can not connect to the database' + err)}
    )
//Get all data router.get('/Cartcollection', 
router.get('/cart', function(req, res) { 
    console.log("Get request for cart"); 

    Cartcollection.find({}).exec(function(err, Cartcollection){ 
        if(err) { 
            console.log("Error retrieving Cartcollection."); 
        } 
        else { 
            res.json(Cartcollection); 
        } 
    })
}); 

//Get all data router.get('/Productscollection', 
router.get('/products', function(req, res) { 
    console.log("Get request for products"); 

    Productscollection.find({}).exec(function(err, Productscollection){ 
        if(err) { 
            console.log("Error retrieving Productscollection."); 
        } 
        else { 
            res.json(Productscollection); 
        } 
    })
}); 

//retrieve data by id 
router.get('/products/:id', function(req, res) { 
	console.log("Get request for single document"); 
	Productscollection.findById(req.params.id) .exec(function(err, Product){ 
		if(err) { 
			console.log("Error retrieving Product."); 
		} else { 
			res.json(Product); 
		} 
	}) 
});

module.exports = router