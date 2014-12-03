var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

gulp.task('default', function() {
  gutil.log('Starting the gulp tasks!');
});

gulp.task('server', function() {
  connect.server({
    root: 'builds/develop',
    livereload: true
  });
});
