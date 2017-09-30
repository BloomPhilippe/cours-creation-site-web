# Introduction Gulp

## 1. Installation

- Si NodeJS n'est pas installer, installez-le en allant sur ce [lien](https://nodejs.org).

- Ouvrez le terminal et testez la commande ci-dessous pour vérifier si node est installé

```
node -v
```

- Testez si npm est bien installé aussi avec la commande ci-dessous

```
npm -v
```

- Au cas où vous souhaitez installer la dernier version de npm

```
npm install npm@latest -g
```

[source](https://www.npmjs.com/get-npm)

## 2. Créer une structure

Exemple ci-dessous :

```
-- nom du projet 
        -
         |
         |
         -src-
         |   |
         |   --- js
         |   |
         |   --- scss
         |
         |
         - index.html
         - gulpfile.js
 ```

## 3. Créer le fichier package.json

Ce fichier permet en autre de stocker les versions des packages (modules) dont vous aurez besoin lors du développement du projet.
Il doit se trouver au même endroit que le fichier gulfile.js

Ajouter le package.json avec la commande ci-dessous et répondre aux questions

```
npm init
```

## 4. Installer vos packages de developpement

Les modules ci-dessous, vous permettrons de créer des tâches gulp (sass, css, js, etc...)

```
npm install gulp --save-dev
```
```
npm install gulp-autoprefixer --save-dev
```
```
npm install gulp-concat --save-dev
```
```
npm install gulp-minify-css --save-dev
```
```
npm install gulp-sass --save-dev
```
```
npm install gulp-util --save-dev
```
```
npm install gulp-rename --save-dev
```
```
npm install gulp-uglify --save-dev
```
  
## 5. Construiser votre fichier gulpfile.js avec vos tâches

 
Allez voir la documentation ci-dessous :

[Gulp git](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Ou analyser le fichier gulfile.js dans un des trois répertoire.

## 5. Activer les commandes Gulp

Très important, afin d'utiliser les lignes de commande gulp, vous devez activer gulp en global.

```
npm install --global gulp 
```


## 7. Autres commandes

Pour installer tout les packages qui sont écrit dans package.json
Si vous installez sur une autre machine ou que vous deployer votre projet, il ne faut pas garder le dossier node_modules, ni le copier/coller...
Pour installer tous les modules (dans package.json) en une commande, il suffit d'effectuer la commande ci-dessous :

```
npm install
```

Pour installer un package en particulier et l'ajouter au package.json dans les dépendances. Le but est que lorsque vous ferez npm install, le nouveau package sera installé automatiquement.

```
npm install bootstrap@4.0.0-alpha.6 --save
```

## 8. Rafraichir le navigateur automatiquement

[Avec Brower-sync](notes/brower-sync.md)


## Liens utiles

- [https://www.browsersync.io/docs/options](https://www.browsersync.io/docs/options)
- [http://livereload.com/extensions/](http://livereload.com/extensions/)
- [https://www.npmjs.com/package/gulp-livereload#livereloadoptions](https://www.npmjs.com/package/gulp-livereload#livereloadoptions)
- [https://stackoverflow.com/questions/43415506/how-to-make-a-refresh-in-browser-with-gulp](https://stackoverflow.com/questions/43415506/how-to-make-a-refresh-in-browser-with-gulp)
- [https://www.sitepoint.com/livereload/](https://www.sitepoint.com/livereload/)