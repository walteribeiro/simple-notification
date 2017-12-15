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
    return gulp.src('./src/app.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['styles', 'scripts']);