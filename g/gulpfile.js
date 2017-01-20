var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		util = require('gulp-util'),
		gulpprint = require('gulp-print'),
		gulpif = require('gulp-if'),
		config = require('./gulp.config')(),
		args = require('yargs').argv;

// add '--verbose' arg to print list of processed files
gulp.task('vet', function() {
	log('running files thru jshint');

	return gulp
		.src(config.alljs)
		.pipe(gulpif(args.verbose, gulpprint()))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe(jshint.reporter('fail'));

});

function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	} else {
		util.log(util.colors.blue(msg));
	}
}