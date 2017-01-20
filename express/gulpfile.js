var gulp     = require('gulp'),
		jshint   = require('gulp-jshint'),
		jsReport = require('jshint-stylish'),
		nodemon  = require('gulp-nodemon');


var jsFiles = ['*.js', 'src/**/*.js'];
var htmlFiles = ['./src/views/*.ejs'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter(jsReport, {
			verbose: true
		}));
});

gulp.task('inject', function(){
	var wiredep = require ('wiredep').stream;
	var inject = require('gulp-inject');
	var injectSrc = gulp.src([
		'./public/css/*.css',
		'./public/js/*.js'],
		{read: false});
	var injectOptions = { ignorePath: 'public/' };
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib/',
		ignorePath: '../../public'
	};
	return gulp.src(htmlFiles)
		.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./src/views'));
});


gulp.task('serve', ['style', 'inject'], function(){
	var options = {
		// specifies which file nodemon will serve
		script: 'app.js',
		delayTime: 1,
		env: {
			'PORT': 3000
		},
		watch: jsFiles
	};

	return nodemon(options)
		.on('restart', function(ev){
			console.log('restarting...');
		});

});