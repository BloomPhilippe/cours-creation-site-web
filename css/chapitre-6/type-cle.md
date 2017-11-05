# Type mots-clés

```css
p {
  font-size: x-large;
}
```

Vous constatez que ``x-large`` n'est pas numérique.

```css
body {
  color: #3c763d;
}

p {
  color: inherit;
}
```

``inherit`` veut dire que la valeur sera la même que celle du sélecteur parent. 
Si aucun sélecteur parent ne se trouve dans le code CSS, il reprendra la valeur de body...

```css
body {
  color: #3c763d;
}

p {
  color: #000000!important;
}
```

``!important`` veut dire que la valeur sera la plus importante de tout le code CSS donc ce sera la seule prise en compte.
Ce mot-clé est à utiliser qu'en cas d'**extrème nécessité** !