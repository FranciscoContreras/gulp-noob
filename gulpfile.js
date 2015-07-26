var gulp 		= require('gulp');
var browserSync = require('browser-sync');


gulp.task('copyIndex', function(){
	gulp.src(['src/index.html', 'src/style.css'])
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('watchFiles', function(){
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/style.css', ['copyIndex']);
});

gulp.task('default', ['copyIndex', 'browserSync', 'watchFiles']);