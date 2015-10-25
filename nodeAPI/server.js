var express = require('express');
var request = require('request');
var app = express();
var ig = require('instagram-node').instagram();

var port = process.env.PORT || 3000;
var router = express.Router(); 

router.use(function(req, res, next){ 
	console.log('Acesso...');
	next();
});

router.get('/issuu', function(req, res) { 
	request('http://search.issuu.com/api/2_0/document?q=prefeituradebh', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.send(JSON.stringify(body));
	    }
	});
	
});

router.get('/instagram', function(req, res) { 
	request('https://api.instagram.com/v1/users/2234801162/media/recent/?access_token=31199858.630b037.213c407ea1e1498dbc4950c58ee7face', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.send(JSON.stringify(body));
	    }
	});
});

app.use('/api', router); 

app.listen(port); 

console.log('Escutando na ' + port);