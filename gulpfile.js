var gulp = require('gulp'),
watch = require('gulp-watch'),
babel = require('gulp-babel');

gulp.task('compile', function() {
	gulp.src('components/*.jsx')
	.pipe(watch('components/*.jsx'))
	.pipe(babel())
	.pipe(gulp.dest('build'));
});
