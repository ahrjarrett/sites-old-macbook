var express = require('express'),
		app = express(),
		port = process.env.PORT || 5000;
// process.env.port pulls from env
// (in gulpfile, in this case)

var nav = [{
	Link: '/Books', Text: 'Books'}, {
	Link: '/Authors', Text: 'Authors'
}];

// to pass var nav into router:
// 1. turn router into function
// 2. pass nav as parameter
var bookRouter = require('./src/routes/routes')(nav);

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view-engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function(request, response){
	response.render('index.ejs', {
		title: 'Book App Title', 
		nav: nav
	});
});

app.listen(port, function(err){
	console.log('listening on port ' + port);
});

