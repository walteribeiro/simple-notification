var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
    return gulp.src('./src/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
    var src = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './src/app.js'
     ];

    return gulp.src(src)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
    var extensions = '{eot,svg,ttf,woff,woff2,otf}';
    var src = [
        './node_modules/font-awesome/fonts/*.' + extensions
    ];
    
    return gulp.src(src)        
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default', ['styles', 'scripts', 'fonts']);