var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    browserify = require('gulp-browserify'),
    minify = require('gulp-minify'),
    minifyCss = require('gulp-minify-css');

gulp.task('styles', function(){
  sass('./resources/scss/style.scss', {style: 'expanded'})
    .pipe(gulp.dest('web/css/'))
    .pipe(notify('Styles have been compiled'));
});

gulp.task('scripts', function(){
  gulp.src(['resources/js/script.js'])
      .pipe(browserify())
      .pipe(minify())
      .pipe(gulp.dest('web/js/'))
      .pipe(notify('Scripts have been compiled'));
});

gulp.task('watch', function(){
  gulp.watch('resources/js/*.js', ['scripts']);
  gulp.watch('resources/scss/**/*.scss', ['styles']);
})

gulp.task('default', ['styles', 'scripts']);