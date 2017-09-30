# Browser-sync

## Installation

1. executer la commande ci-dessous dans votre projet :

```
npm install browser-sync --save-dev
```

2. Dans le fichier gulp (au début), ajouter la variable browser-sync

````
var browserSync = require('browser-sync').create();
````

3. Créer un nouvelle tâche qui rafraîchit ton navigateur lorsqu'il capte un changement.

````
gulp.task('serve', ['scss'], function() {
  browserSync.init({
    proxy: "localhost/nom-du-site"
  });
  gulp.watch("src/scss/*.scss", ['scss']).on('change', browserSync.reload);
});
````

4. execute la nouvelle tâche gulp

````
gulp serve
````

[Pour plus d'informations](https://www.browsersync.io/docs/options)



