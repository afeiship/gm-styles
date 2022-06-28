(function () {
  'use strict';

  const gulp = require('gulp');
  const path = require('path');
  const dartSass = require('dart-sass');
  const SASS_INCLUDE_PATHS = [path.join(__dirname, '..', '/node_modules/')];
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*', '@jswork/gulp-*']
  });

  $.sass.compiler = dartSass;

  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sass({ outputStyle: 'compressed', includePaths: SASS_INCLUDE_PATHS }))
      .pipe(gulp.dest('docs'))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });
})();
