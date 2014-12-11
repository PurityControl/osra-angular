var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect');

gulp.task('default', function() {
  gutil.log('Starting the gulp tasks!');
});

gulp.task('lint', function() {
  return gulp.src('builds/develop/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', {verbose: true}));
});

gulp.task('server', function() {
  connect.server({
    root: 'builds/develop',
    livereload: true
  });
});
