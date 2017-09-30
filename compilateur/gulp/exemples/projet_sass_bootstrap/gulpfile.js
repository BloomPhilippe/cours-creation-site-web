var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    order = require("gulp-order");

var jsPaths = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/tether/dist/js/tether.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/app.js'
];


/*
 * Tâche Scss
 * Commande : "gulp scss"
 * Description : Compile le fichier main.scss, place ce fichier dans le répertoire css et le minifie
 */
gulp.task('scss', function() {
    return gulp.src(['src/scss/app.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename('main.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/'))
        .on('end', function() {
            gutil.log(gutil.colors.yellow('♠ La tâche SCSS est terminée.'));
        });
});

/*
 * Tâche Scripts
 * Commande : "gulp scripts"
 * Description : Minifie et concaténe les fichiers .js en créant un fichier main.min.js et place ce fichier dans dist/js
 */
gulp.task('js', function() {
    return gulp.src(jsPaths)
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'))
        .on('end', function() {
            gutil.log(gutil.colors.yellow('♠ La tâche JavaScript est terminée.'));
        });
});


gulp.task('watch', function()
{
    gulp.watch('src/scss/*.scss', ['scss']);
    gulp.watch('src/js/*.js', ['js']);
});

// default task
gulp.task('default', function() {
    gulp.start('js');
    gulp.start('scss');
});