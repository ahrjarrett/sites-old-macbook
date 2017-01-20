var express = require('express');
var bookRouter = express.Router();

var books = [
	{
		title: 'War and Peace',
		genre: 'Historical Fiction',
		author: 'Leo Tolstoy',
		read: true
	},
	{
		title: 'CSS Secrets',
		genre: 'Computer Science',
		author: 'Lea Verou',
		read: false
	},
	{
		title: 'Gravity\'s Rainbow',
		genre: 'Historical Fiction',
		author: 'Thomas Pynchon',
		read: true
	},
	{
		title: 'The Savage Detectives',
		genre: 'Literary Fiction',
		author: 'Roberto Bolaño',
		read: true
	}
];

// router mounted on /books route

var router = function(nav) {

	bookRouter.route('/')
		.get(function(request, response) {
			response.render('books.ejs', {
				title: 'Book App Title', 
				nav: nav,
				books: books
			});
		});

	bookRouter.route('/:id')
		.get(function(request, response){
			var id = request.params.id;
			response.render('book.ejs', {
				title: 'Book App Title', 
				nav: nav,
				book: books[id]
			});
		});

	return bookRouter;
};
module.exports = router;
