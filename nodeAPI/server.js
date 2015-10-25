var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var router = express.Router(); 

router.use(function(req, res, next){ 
	console.log('Acesso...');
	next();
});

router.get('/', function(req, res) { 
	res.json({ message: 'TESTE' });
});

router.get('/instagram', function(req, res) { 
	res.json({ message: 'TESTE' });
});

app.use('/api', router); 

app.listen(port); 

console.log('Escutando na ' + port);