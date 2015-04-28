var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
    // serve with default settings
    var server = gls.static(['.','bower_components'],3000); //equals to gls.static('public', 3000);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['app/**/*.js','app/**/*.css', 'app/**/*.html'], server.notify);
});


// Run all task before running 'default'
gulp.task('default',['serve']);
