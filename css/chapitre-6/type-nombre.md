# Type nombre


```css
p {
  font-size: 10px;
}
```

`` 10 px `` est un nombre de type fixe.


```css
body {
    font-size: 10px;
}

p {
    font-size: 12px;
}

p:nth-of-type(4) {
   font-size: 0.5em;
}
```

`` 0.5em `` est un nombre de type proportionnelle.

Cela vaut dire que la taille de la police de ```p:nth-of-type(4)``` sera la moitié de sont parent direct donc ``p``


```css
body {
    font-size: 10px;
}

p {
    font-size: 12px;
}

p:nth-of-type(4) {
   font-size: 0.5rem;
}
```

`` 0.5rem `` est un nombre de type proportionnelle.

Cela vaut dire que la taille de la police de ```p:nth-of-type(4)``` sera la moitié de sont du premier parent donc ``body``


```css
div{
    width: 50%;
}
```

`` 50% `` est un nombre de type proportionnelle par rapport à la largeur.


```css
h1 {
  font-size: 1vw;
}
```

`` 1vw `` est un nombre de type proportionnelle par rapport à la largeur.

Cela veut dire 1% de la largeur de votre écran.


```css
h1 {
  font-size: 1vh;
}
```

`` 1vh `` est un nombre de type proportionnelle par rapport à la hauteur.

Cela veut dire 1% de la hauteur de votre écran.


```css
h1 {
  font-size: 1vmin;
}
```

`` 1vmin `` est un nombre de type proportionnelle par rapport à la largeur et hauteur.

C'est très intéressant pour le responsive...
