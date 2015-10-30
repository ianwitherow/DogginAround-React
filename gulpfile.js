var gulp = require('gulp'),
watch = require('gulp-watch'),
babel = require('gulp-babel');

gulp.task('compile', function() {
	gulp.src('components/*.js')
	.pipe(watch('components/*.js'))
	.pipe(babel())
	.pipe(gulp.dest('build'));
});
