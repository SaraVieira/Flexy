var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var processors = [
    autoprefixer({browsers: ['last 3 versions', 'last 4 iOS versions']}),
    cssnano(),
];

gulp.task('less', function () {
  return gulp.src('./src/flexy.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
