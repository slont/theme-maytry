const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')

gulp.task('js', function() {
	gulp.src('src/js/*.js')
		.pipe(plumber())
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
});

gulp.task('scss', function() {
	gulp.src('src/scss/app.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets/css/'))
})

gulp.task('watch', function(){
		gulp.watch('./src/**/*', ['default'])
})

gulp.task('default', ['js', 'scss'])
