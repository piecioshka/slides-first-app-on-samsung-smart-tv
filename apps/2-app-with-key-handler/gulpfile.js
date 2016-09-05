/*global require */

(function () {
    'use strict';

    var gulp = require('gulp');
    var zip = require('gulp-zip');
    var rimraf = require('gulp-rimraf');

    // Show information about gulpfile.
    require('gulp-help')(gulp);

    gulp.task('remove-zip', 'Delete package.', function () {
        return gulp.src('../widget/WarsawJS_2.zip', { read: false })
            .pipe(rimraf({ force: true }));
    });

    gulp.task('zip', 'Create package.', ['remove-zip'], function () {
        return gulp.src(['**/*', '!./node_modules/**'])
            .pipe(zip('WarsawJS_2.zip'))
            .pipe(gulp.dest('../widget'));
    });

}());
