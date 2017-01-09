var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var serve = require('gulp-serve');

gulp.task('serve', serve('./'));
gulp.task('less', function () {
  return gulp.src('./src/flexy.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist'));
});
