(function() {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*', '@jswork/gulp-*']
  });

  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sass({ outputStyle: 'compressed' }))
      .pipe(gulp.dest('docs'))
      .pipe(gulp.dest('dist'));
  });
})();
