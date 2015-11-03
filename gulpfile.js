var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    minifyCSS   = require('gulp-minify-css'),
    prefixer    = require('gulp-autoprefixer'),
    ghPages     = require('gulp-gh-pages'),
    img         = require('gulp-imagemin'),
    minifyHTML  = require('gulp-minify-html'),
    connect     = require('gulp-connect')

gulp.task('default', ['styles', 'img', 'html'])

gulp.task('styles', function () {
  return gulp
  .src('./src/sass/**/*.sass')
  .pipe(sass({
    indentedSyntax: true
  }))
  .pipe(prefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/assets/css/'))
})

gulp.task('html', function() {
  return gulp
  .src('./src/html/*')
  .pipe(minifyHTML())
  .pipe(gulp.dest('./build/'))
})

gulp.task('img', function() {
  return gulp
  .src('./src/img/**/*')
  .pipe(img({
    progressive: true
  }))
  .pipe(gulp.dest('./build/assets/img/'))
})

gulp.task('deploy', ['default'], function() {
  return gulp
  .src('./build/**/*')
  .pipe(ghPages({
    branch: 'master'
  }))
})

gulp.task('watch', ['default'], function () {
  gulp.watch('./src/js/**/*', ['scripts'])
  gulp.watch('./src/sass/**/*', ['styles'])
  gulp.watch('./src/html/*', ['html'])
})

gulp.task('serve', ['watch'], function () {
  connect.server({
    root: './build/',
    livereload: true
  })
})
