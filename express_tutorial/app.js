var express = require('express');
var app = express();
var PORT = 3001;

app.get('/', function(req, res) {
	res.send('hello suuup');
});

app.listen(PORT, function(){
	console.log('chat app listening on port ' + PORT);	
});
