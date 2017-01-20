module.exports = function (app) {
	if(!opts) {
		var opts = {};
	}

	app.locals.company = opts.company || 'FollowClosely';
  
  app.locals.social = opts.social || {
    'https://facebook.com/FollowClosely': 'facebook-square',
    'https://twitter.com/_Closely': 'twitter-square',
    'https://plus.google.com/FollowClosely': 'google-plus-square',
    'https://houzz.com/FollowClosely': 'houzz'
	};
  app.locals.footerUl = opts.footerUl || {
    'Home': '',
    'Pools': '#featured-categories',
    'Testimonials': '#reviews',
    'Projects': '#featured-categories',
    'Resources': '#resources2',
    'About Us': '#resources',
    'Get a Quote': '#open-modal'
  };
};
