# Packages incontournables


## Emmet

Ce package permet de coder beaucoup plus rapidement à l'aide de snippets, d'abréviation de code, de raccourcis et bien plus encore.

Package : [Lien](https://packagecontrol.io/packages/Emmet)

Documentation : [Lien](https://docs.emmet.io/cheat-sheet/)

**Exemple d'abréviation :**

En tapant le code ```ul>li*4>a``` puis sur <kbd>tab</kbd>, vous obtenez le code ci-dessous

```html
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

En tapant le code ```html:5``` puis sur <kbd>tab</kbd>, vous obtenez le code ci-dessous

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

1. Monter ou descendre une ligne entière de votre code

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + &uparrow;

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + &downarrow;

![ctrl+shift](sublime-text/video/emmet-move.gif)

2. Selection progressive

<kbd>Shift</kbd> + &uparrow;

<kbd>Shift</kbd> + &downarrow;

<kbd>Shift</kbd> + &leftarrow;

<kbd>Shift</kbd> + &rightarrow;

![shift+direction](sublime-text/video/select-code.gif)



## SublimeLinter

Ce module permet les errors liée à votre code.

Lien : [Documentation](http://sublimelinter.readthedocs.io/en/latest/installation.html)
Lien : [GitHub](https://github.com/SublimeLinter/SublimeLinter3)

HTML : [SublimeLinter-html-tidy](https://packagecontrol.io/packages/SublimeLinter-html-tidy)
CSS : [SublimeLinter-csslint](https://packagecontrol.io/packages/SublimeLinter-csslint)

````
npm install -g csslint
````
PHP : [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php)



## All Autocomplete

Lien : [https://packagecontrol.io/packages/All%20Autocomplete](https://packagecontrol.io/packages/All%20Autocomplete)



## Side​Bar​Enhancements

Ce module permet d'obtenir des options supplémentaires lorqu'on clique la sidebar du projet

Lien : [https://packagecontrol.io/packages/SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements)

**Sans et avec le module**

![sans module](sublime-text/img/sidebar.png)



## Doc​Blockr

Ce module permet de commenter vos fonction PHP, Javascript, etc...

Lien : [https://packagecontrol.io/packages/DocBlockr](https://packagecontrol.io/packages/DocBlockr)



## Alignment

Ce module permet d'aligner un tableau PHP, Javascript

Lien : [https://packagecontrol.io/packages/Alignment](https://packagecontrol.io/packages/Alignment)

Configuration :

- Aller dans Preferences > Package Settings > Alignment > Settings - User
- Ajouter le code ci-dessous :

````
{
    // The mid-line characters to align in a multi-line selection, changing
    // this to an empty array will disable mid-line alignment
    "alignment_chars": [
        "=", ":"
    ]
}
````

Utilisation : <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>a</kbd>

![align](sublime-text/video/align-action.gif)



## GotoDocumentation

Plus besoin de chercher comment ecrire tels ou tels code sur internet... Grâce à ce module, vous pouvez trouver votre documentation plus facilement.

Lien : [https://packagecontrol.io/packages/GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation)

Utilisation : <kbd>Windows</kbd> + <kbd>Shift</kbd> + h



## Color Highlighter

Ce module permet de visualiser la couleur correspondant à un code couleur

Lien : [https://packagecontrol.io/packages/Color%20Highlighter](https://packagecontrol.io/packages/Color%20Highlighter)


![color](sublime-text/video/color-show.gif)


## ColorPicker

Ce module permet d'utiliser un color picker pour vos fichier CSS

Lien : [https://packagecontrol.io/packages/ColorPicker](https://packagecontrol.io/packages/ColorPicker)

Utilisation : <kbd>ctrl</kbd> + <kbd>Shift</kbd> + c



## Case Conversion

Ce module permet de modifier le formatage d'un texte

Lien : [hhttps://packagecontrol.io/packages/Case%20Conversion](https://packagecontrol.io/packages/Case%20Conversion)

**Raccourcis :**

Certains raccourcis vont par 2 !

- Séparer plusieurs textes par un espace

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>w</kbd>

- Convertir le texte en minuscule

<kbd>Ctrl</kbd> + <kbd>k</kbd>
<kbd>Ctrl</kbd> + <kbd>L</kbd>

- Convertir le texte en Majuscule

<kbd>Ctrl</kbd> + <kbd>k</kbd>
<kbd>Ctrl</kbd> + <kbd>u</kbd>

- Séparer chaques textes par une majuscule (PascalCase)

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd>

- Chaques textes à une majuscule sauf le premier (camelCase)

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>

- Séparer chaques textes par un underscore (snake_case)

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>s</kbd>

- Séparer chaques textes par un tiret (dash-case)

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>h</kbd>

- Séparer chaques textes par un point (dot.case)

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>c</kbd>
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>d</kbd>

- Passer d'un formatage à l'autre entre snake_case à PascalCase et camelCase

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>-</kbd>



## Bracket​Highlighter

Ce module permet de vous indiquer où se situe le tag de fermeture, la fin d'une fonction, etc...

Lien : [https://packagecontrol.io/packages/BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter)



## GotoDocumentation

Plus besoin de chercher comment ecrire tels ou tels code sur internet... Grâce à ce module, vous pouvez trouver votre documentation plus facilement.

Lien : [https://packagecontrol.io/packages/GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation)

Utilisation : <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>h</kbd>



## Bootstrap 4 Autocomplete

Ce module permet d'automatiquement completer vos attributs class avec les class existantes de Bootstrap 4

Lien : [https://packagecontrol.io/packages/Bootstrap%204%20Autocomplete](https://packagecontrol.io/packages/Bootstrap%204%20Autocomplete)

![bs4-auto](sublime-text/video/bs4-auto.gif)



## Bootstrap 4 Snippets

Ce module permet d'obtenir de nombreux snippets Bootstrap 4

Lien : [https://packagecontrol.io/packages/Bootstrap%204%20Snippets](https://packagecontrol.io/packages/Bootstrap%204%20Snippets)

**Exemple de snippets :**

En tapant le code ```cards``` puis sur <kbd>tab</kbd>, vous obtenez le code ci-dessous

````html
    <div class="card">
      <img class="card-img-top" data-src="holder.js/100%x180/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Button</a>
      </div>
    </div>
````

En tapant le code ```jumbotron``` puis sur <kbd>tab</kbd>, vous obtenez le code ci-dessous

````html
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="m-y-md">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
````