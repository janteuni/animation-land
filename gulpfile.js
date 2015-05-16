var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('liveReload', function() {
    return gulp.src('.')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default', ['liveReload']);