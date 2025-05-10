const gulp = require('gulp');
const path = require('path');
const dartSass = require('dart-sass');
const SASS_INCLUDE_PATHS = [path.join(__dirname, '..', '/node_modules/')];
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
});

gulp.task('styles', function () {
  return gulp
    .src('src/*.scss')
    .pipe($.jswork.pkgHeader())
    .pipe($.sass(dartSass)({ outputStyle: 'compressed', includePaths: SASS_INCLUDE_PATHS }))
    .pipe(gulp.dest('docs'))
    .pipe(gulp.dest('dist'))
    .pipe($.size({ title: '[ minimize size ]:' }));
});
