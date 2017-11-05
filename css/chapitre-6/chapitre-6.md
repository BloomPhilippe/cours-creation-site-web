# Les propriétés

**Rappel de la déclaration :**

![rappel](img/declaration.png)


## Possibilités de toutes les propriétées

![liste](img/listing.png)

Avec les différentes propriétées, vous pouvez :

- Modifier la couleur des textes, la couleur de fond, ajouter une image de fond, etc...
- Modifier le texte dont la taille, la police, l'épaiseur, l'alignement, etc..
- Ajouter et modifier les bordures et outline (outline est une sorte de bordure externe)
- Modifier les espacement et le style de positionnement
- Obtenir une différence d'apparence entre desktop, mobile, impression, etc...
- Créer des animations
- Créer des formes [exemple ici](https://css-tricks.com/examples/ShapesOfCSS/)
- Créer des masques [exemple](https://css-tricks.com/clipping-masking-css/)



## Ecriture étendue ou abrégée

**Schémas avec margin (peut être utilisé de la même façon avec padding) :**


![liste](img/margin-1.png)


**Autres versions courtes**


![liste](img/courtes.png)


**Attention avec la version abrégée pour la propriété ``font``, vous devez respecter l'ordre**


# Les valeurs

Vous trouverez l'évolution et les descriptions des différentes valeurs sur [W3C](https://www.w3.org/TR/css-values-3/)


## Les types de valeurs

**Schémas des différents types de valeurs :**

![valeur](img/valeurs.png)

### Type nombre


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



### Type texte

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

Vous trouverez la liste des noms de polices de bases disponibles [ICI](https://www.w3schools.com/cssref/css_websafe_fonts.asp) ou [ICI](https://www.w3.org/Style/Examples/007/fonts.fr.html)

```css
p:before {
  content: "\2618";
}
```

Ici vous utilisez un texte qui représente une icon ou un caractère spécial comme [ici](https://unicode-table.com/fr/#0063)
        
### Type mots-clés

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


### Type couleur

![couleurs](img/couleurs.png)


**Couleur en version mots-clés**

```css
p {
  color: green;
}
```

```css
p {
  color: blue;
}
```


**Couleur en version hexadecimal**

```css
p {
  color: #000;
}
```



**Couleur en version decimal**

```css
p {
  color: rgb(0,0,0);
}
```

``rgb`` est l'abrégé de red green blue

Elle permet de réglé la valeur de rouge de 0 à 255, le vert de 0 à 255 et le bleu de 0 à 255.

![rgb](img/color-wheel-rgb.png)


```css
p {
  color: rgba(0,0,0,0.5);
}
```



Avec ``rgba``, on peut gèrer également l'opacité de 0 à 1.


```css
p {
  color: hsl(60,100%,25%);
}
```

![hsl](img/couleurs-tsl.png)


```css
p {
  color: hsla(60,100%,25%,0.5);
}
```

Avec ``hsla``, on peut gèrer l'opacité.



### Liens utiles

- [Liste des coleurs](https://www.w3.org/wiki/CSS/Properties/color/keywords)
- [Liste des coleurs et des fonctions](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [Adobe color CC](https://color.adobe.com/fr/create/color-wheel/?base=2&rule=Analogous&selected=0&name=Mon%20th%C3%A8me%20Color&mode=rgb&rgbvalues=0.709087013219719,1,0.650510065756196,0.91,0.6595764867472764,0.04550000000000004,1,0,0,0.14143670494515384,0.04550000000000004,0.91,0.050000000000000044,1,0.7169197085622045&swatchOrder=0,1,2,3,4)
- [Paletton](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)

### Type expressions


- **Calcul**

    ```css
    div {
      margin-left: calc(100%*4);
    }
      
    div {
      width: calc(200px + (100%*4));
    }
    ```
    
    Vous pouvez effectuer un bon nombre de calcul intéressant.
    
    
    
- **Attribut**
   
    ```css
    div:after {
      content: attr(data-ref);
    }
    ```
    
    ```html
    <p data-ref="1234"></p>
    ```
    
    ``attr(data-ref)`` va rechercher la valeur de l'attribut HTML ``data-ref`` donc 1234
    
    
    
- **Counteur**
    
    ```css
    body {
      counter-reset: titre;
    }
    h1{
      counter-increment: titre;
    }
    h1:before{
      content: counter(titre) " - ";
    }
    ```
    
    ![count](img/count1.png)
    
    
    
    



---

[:back:](../chapitre-5/chapitre-5.md) | [:soon:]()    
    
    