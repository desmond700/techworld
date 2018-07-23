// server.js

const express = require('express'),
    bodyparser = require('body-parser'),
	path = require('path');
	http = require('http');
	cors = require('cors');
    api = require('./server/routes/api');

    const app = express();
    app.use(bodyparser.json());
	app.use(cors());
	/*app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	  });*/
	  
	// Angular DIST output folder
	app.use(express.static(path.join(__dirname, 'dist')));
	
	// API location
	app.use('/api',api);
	
	
	// Send all other requests to the Angular app
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist/techworld/index.html'));
	});
	
	// Set Port
    const port = process.env.PORT || 3000;
	app.set('port', port);

    var server = http.createServer(app);
	
	server.listen(port, () =>  console.log(`Listening on port: ${port}`));
