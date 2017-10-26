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


### Type couleur

```css
p {
  color: rgba(0,0,0,0.5);
}
```
    
Ou

```css
p {
  color: #000;
}
```

L'avantage avec ``rgba``, c'est que l'on peut gèrer l'opacité.


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
    
    