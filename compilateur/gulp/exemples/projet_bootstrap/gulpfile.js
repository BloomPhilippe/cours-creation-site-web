
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

var jsPath = [
  'js/*.js',
  'js/**/*.js',
  '!js/*.min.js'
];

var scssPath = [
  'scss/*.scss'
];


/*
 * Tâche sass
 * Commande : "gulp sass"
 * Description : Compile le fichier main.scss, place ce fichier dans le répertoire css et le minifie
 */
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer('last 2 version'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css'))
      .on('end', function() {
        gutil.log(gutil.colors.blue('♠ La tâche sass est terminée.'));
      });
});

/*
 * Tâche js
 * Commande : "gulp js"
 * Description : Minifie et concaténe les fichiers .js en créant un fichier main.min.js et place ce fichier dans dist/js
 */
gulp.task('js', function() {
  return gulp.src(jsPath)
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist/js'))
      .on('end', function() {
        gutil.log(gutil.colors.yellow('♠ La tâche JavaScript est terminée.'));
      });
});




/*
 * Tâche watch
 * Commande : "gulp watch"
 */
gulp.task('watch', function() {
  gulp.watch(scssPath, ['sass']);
  gulp.watch(jsPath, ['js']);
});

/*
 * Tâche Default
 * Commande : "gulp"
 * Description : Elle est executée lors de la command gulp
 * Généralement, on y execute toutes les tâches
 */
gulp.task('default', function() {
  gulp.start('sass');
});
