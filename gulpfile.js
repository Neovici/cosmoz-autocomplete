'use strict';

/*globals require, process */

// Include Gulp & tools we'll use
var bowerComponents = 'bower_components',
	del = require('del'),
	gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	packageJson = require('./package.json'),
	path = require('path'),
	localBowerPath = path.join(bowerComponents, packageJson.name),
	url = require('url');

// Copy all files at the root level (app)
gulp.task('local_bower_install', function () {
	return gulp.src([
		'**/*',
		'!bower_components/',
		'!bower_components/**',
		'!node_modules/',
		'!node_modules/**'
	]).pipe(gulp.dest(localBowerPath));
});

// Deploy to GitHub pages gh-pages branch
gulp.task('deploy-gh-pages', function () {
	var githubUrl = url.parse(packageJson.repository.url);
	// Check if running task from Travis CI, if so run using GH_TOKEN
	// otherwise run using ghPages defaults.
	return gulp.src('**/*')
		.pipe($.if(process.env.TRAVIS === 'true', $.ghPages({
			remoteUrl: 'https://$GH_TOKEN@' + githubUrl.host + githubUrl.pathname,
			silent: true,
			branch: 'gh-pages'
		}), $.ghPages()));
});

// Clean output directory
gulp.task('clean_bower', function () {
	return del([
		localBowerPath
	]);
});


gulp.task('gh-pages', [
	'local_bower_install',
  // 'deploy-gh-pages',
  // 'clean_bower'
]);
