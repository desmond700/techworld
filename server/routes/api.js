

const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Cartcollection = require('../models/cart');
const Productscollection = require('../models/products');
const Laptop = require('../models/products/laptop');
const Camera = require('../models/products/camera');
const Tv = require('../models/products/tv');
const Cell_phone = require('../models/products/cell_phone');
const User = require('../models/user');
const Admin = require('../models/admin');
const config = require('../config/db.js');

mongoose.Promise = global.Promise;
    mongoose.connect(config.db,{ useNewUrlParser: true }).then(
        () => {console.log('Database is connected')},
        err => {console.log('Can not connect to the database' + err)}
    )
	
// Get all data in the cart 
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

// Get all users 
router.get('/users', function(req, res) { 
    console.log("Get request for users"); 

    User.find({}).exec(function(err, user){ 
        if(err) { 
            console.log("Error retrieving users."); 
        } 
        else { 
            res.json(user); 
        } 
    })
}); 

// Get all products data
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

// Retrieve data by id 
router.get('/product/:id', function(req, res) { 
	console.log("Get request for single document"); 
	Productscollection.findById(req.params.id).exec(function(err, Product){ 
		if(err) { 
			console.log("Error retrieving Product."); 
		} else { 
			res.json(Product); 
		} 
	}) 
});

// Post user register data
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

// Post user login data
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

// Post admin login data
router.post('/admin/login', function(req, res) { 
    let userData = req.body;
	Admin.findOne({username: userData.username},function(err, user){ 
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

// Add product to database
router.post('/product/laptop', function(req, res) { 
	let laptopData = req.body;
    let laptop = new Laptop(laptopData);
	laptop.save(function(err, Product){ 
		if(err) { 
			console.log(err);
		} else { 
			res.status(200).send(Product); 
		} 
	}) 
});

// Add product to database
router.post('/product/tv', function(req, res) { 
	let tvData = req.body;
    let tv = new Tv(tvData); 
	tv.save(function(err, Product){ 
		if(err) { 
			console.log(err);
		} else { 
			res.status(200).send(Product); 
		} 
	}) 
});

// Add product to database
router.post('/product/camera', function(req, res) { 
	let cameraData = req.body;
    let camera = new Camera(cameraData);
	camera.save(function(err, Product){ 
		if(err) { 
			console.log(err);
		} else { 
			res.status(200).send(Product); 
		} 
	}) 
});

// Add product to database
router.post('/product/cell-phone', function(req, res) { 
    let cellphoneData = req.body;
    let cell_phone = new Cell_phone(cellphoneData);
	cell_phone.save(function(err, Product){ 
		if(err) { 
			console.log(err);
		} else { 
			res.status(200).send(Product); 
		} 
	}) 
});

// Add item to cart
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


// Delete an item from the cart
router.delete('/cart/item/:id', function(req, res) { 
    
    var id = req.param("id");

    Cartcollection.remove({_id: id},function(err, result){ 
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

// Delete an item from the cart
router.delete('/user/:id', function(req, res) { 
    
    var id = req.param("id");

    User.remove({_id: id},function(err, result){ 
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