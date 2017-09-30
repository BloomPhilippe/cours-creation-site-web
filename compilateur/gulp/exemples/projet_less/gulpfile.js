var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    gutil = require('gulp-util');

var jsPath = [
    'js/*.js',
    'js/**/*.js',
    '!js/*.min.js'
];

var lessPath = [
    'less/*.less'
];


/*
 * Tâche less
 * Commande : "gulp less"
 * Description : Compile les fichiers less, place les fichiers dans le répertoire dist/css et minifie le tout
 */
gulp.task('less', function() {
    gulp.src('less/main.less')
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'))
        .on('end', function() {
            gutil.log(gutil.colors.blue('♠ La tâche less est terminée.'));
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
 * Description : Vérifie si un fichier est modifié et si c'est le cas, exécute les tâches placées dans le tableau
 * 1er paramètre est le ou les fichier(s) à vérifier
 * 2ème paramètre sont les tâches à executer en cas de changement
 */
gulp.task('watch', function() {
    gulp.watch(lessPath, ['less']);
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
