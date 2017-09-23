# Sublime Text

## Installation

Vous pouvez aller sur ce [lien](https://www.sublimetext.com) afin de télécharger Sublime text.

Il est possible de l'obtenir en version portable!

## Raccourcis

Lorsque vous travaillez avec un éditeur de texte, il est préférable de connaitre les racourcis clavier.

Chaque éditeur a ses propre racourcis!

Voici les raccourcis Windows sur ce [lien](sublime-text/pdf/racourcis-windows.pdf)

Voici les raccourcis MacOS sur ce [lien](sublime-text/pdf/racourcis-osx.pdf)

Au début, essayez d'avoir votre feuille de racourcis près de vous lorsque vous coder.

**Vous allez surement chercher après le racourcis qui va indenter votre code... De base, il n'en existe pas!** 

![indent](sublime-text/video/indent-code.gif)

## Packages

Les packages sont des modules qui permettent d'ajouter de nouvelles fonctionnalités à Sublime Text. Par exemple, si vous coder en HTML, il y a des modules qui permettent de vérifier la syntaxe de votre code et de vous alerter.

Afin d'installer les packages plus facilement, vous devez installer le "Package Control" en allant dans "Tools" puis cliquer sur Install Package Control...

Pour vérifier si Package Control fonctionne, cliquer sur ctrl+p et dans le champ texte, taper package.

![cover](sublime-text/img/package-1.png)

Pour installer un package, cliquer sur ctrl+p taper install et cliquer sur Install Package. Une deuxième popup va apparaître, dans celle-ci taper le nom du module souhaité et cliquer dessus.

![cover](sublime-text/img/package-2.png)

Pour rechercher un package ou trouver la documentation d'un package en particulier, vous pouvez aller aussi sur [https://packagecontrol.io/](https://packagecontrol.io/)


### Packages incontournables


#### Emmet

Ce package permet de coder beaucoup plus rapidement à l'aide de snippets, d'abréviation de code, de raccourcis et bien plus encore.

Liens : [https://packagecontrol.io/packages/Emmet](https://packagecontrol.io/packages/Emmet)

**Exemple d'abréviation :**

En tapant le code ```ul>li*4>a``` puis sur TAB, vous obtenez le code ci-dessous

```html
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

En tapant le code ```html:5``` puis sur TAB, vous obtenez le code ci-dessous

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

**Raccourcis  intéressants :**

1. Monter ou déscendre une ligne entière de votre code

ctrl+shift+up ou ctrl+shift+down

![ctrl+shift](sublime-text/video/emmet-move.gif)

2. Selection progressive

<kbd>Shift</kbd> + &uparrow;

shift+down

shift+left

shift+right

![shift+direction](sublime-text/video/select-code.gif)



#### GotoDocumentation




## Liens utiles

- [Documentation](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_win.html)

- [https://stackoverflow.com/questions/9495007/indenting-code-in-sublime-text-2](https://stackoverflow.com/questions/9495007/indenting-code-in-sublime-text-2)