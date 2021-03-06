var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass',function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
    
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'app'
        },
    })
})
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});
gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist'))
});
gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin({
        // Setting interlaced to true
        interlaced: true
      }))
    .pipe(gulp.dest('dist/images'))
});
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('icons', function() {
    return gulp.src('app/icons/**/*')
    .pipe(gulp.dest('dist/icons'))
});
gulp.task('views', function() {
    return gulp.src('app/views/**/*')
    .pipe(gulp.dest('dist/views'))
});
gulp.task('clean:dist', function() {
    return del.sync('dist');
});
gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});
gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/views/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});
gulp.task('build', function (callback) {
    runSequence('clean:dist', 
      ['sass', 'useref', 'images', 'fonts','icons', 'views'],
      callback
    )
});
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
      callback
    )
});
