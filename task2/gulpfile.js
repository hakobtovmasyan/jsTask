var gulp = require('gulp');  
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');


var jsFiles = 'lib/js/*.js',  
    jsDest = 'dist/scripts';

var cssFiles = 'lib/css/*.css',
	cssDest = 'styles/all.css';

gulp.task('scripts', function() {  
   return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {  
    return gulp.src(cssFiles)
    	.pipe(concatCss(cssDest))
    	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
    	.pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
    	.pipe(gulp.dest('dist/'));
});
