

const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Cartcollection = require('../models/cart');
const Productscollection = require('../models/products');
const User = require('../models/user');
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
router.get('/products/:category', function(req, res) { 
    console.log("Get request for products"); 

    Productscollection.find({type: req.params.category}).exec(function(err, Productscollection){ 
        if(err) { 
            console.log("Error retrieving Productscollection."); 
        } 
        else { 
            res.json(Productscollection); 
        } 
    })
}); 

//retrieve data by id 
router.get('/product/:id', function(req, res) { 
	console.log("Get request for single document"); 
	Productscollection.findById(req.params.id) .exec(function(err, Product){ 
		if(err) { 
			console.log("Error retrieving Product."); 
		} else { 
			res.json(Product); 
		} 
	}) 
});

// post user data
router.post('/register', function(req, res) { 
    let userData = req.body;
    let user = new User(userData);
	user.save(function(err, registerUser){ 
		if(err) { 
			console.log(err); 
		} else { 
			res.status(200).send(registerUser); 
		} 
	}) 
});

// post user data
router.post('/login', function(req, res) { 
    let userData = req.body;
	User.findOne({username: userData.username},function(err, user){ 
		if(err) { 
			console.log(err); 
		} else { 
            if(!user){
                res.status(401).send('Invalid email');
            }else
            if( user.password !== userData.password ){
                res.status(401).send('Invalid password');
            }else{
                res.status(200).send(user);
            } 
		} 
	}) 
});

router.post('/cart/item', function(req, res) { 

    let cartData = req.body;
    let item = new Cartcollection(cartData);

    item.save(function(err, cartItem){ 
        if(err) { 
            res.status(401).send({err: 'Error: Could not delete robot'});
        } 
        else { 
            res.status(200).send(cartItem);
        } 
    })
}); 


// Delete

router.delete('/cart/:id', function(req, res) { 
    
    var id = req.params.id;

    Cartcollection.remove({_id: ObjectId(id)},function(err, result){ 
        if(err) { 
            res.status(401).send({err: 'Error: Could not delete robot'});
        } 
        if(!result){
            res.status(400).send({err: 'Item deleted from cart collection'}); 
        }
        else { 
            res.send(result);
        } 
    })
}); 

module.exports = router