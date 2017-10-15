# Les sélecteurs avancés

## Sélecteurs Attributs

![attr](img/attrs.png)

1. Attribut présent

    ````css
    p[class] {
    
    }
    ````

2. Attribut dont la valeur est égal

    ````css
    p[class="a"] {
    
    }
    ````
    
3. Attribut dont la valeur commence par

    ````css
    p[class^="a"] {
    
    }
    ````
    
4. Attribut dont la valeur termine par

    ````css
    p[class$="c"] {
    
    }
    ````
    
5. Attribut dont la valeur contient

    ````css
    p[class*="a"] {
    
    }
    ````
    
6. Attribut dont la valeur contient séparée par espace

    ````css
    p[class~="a"] {
    
    }
    ````
    
    ````html
    <p class="a b c"></p>
    ````
    
7. Attribut dont la valeur contient séparée par tiret

    ````css
    p[class|="a"] {
    
    }
    ````
    
    ````html
    <p class="a-b-c"></p>
    ````
    
8. Plusieurs attributs

    ````css
    p[class][id] {
    
    }
    ````


## Pseudo-classes

![pseudo](img/pseudo.png)


1. Première balise ``<p>``

    ````css
    p:first-child {
       background-color: #3c763d;
    }
    ````

2. Dernière balise ``<p>``

    ````css
    p:last-child {
       background-color: #3c763d;
    }
    ````
    
3. Toutes les balises ``<p>`` impair

    ````css
    p:nth-child(odd) {
       background-color: #3c763d;
    }
    ````

4. Toutes les balises ``<p>`` pair

    ````css
    p:nth-child(even) {
       background-color: #3c763d;
    }
    ````
    
5. La quatrième balise ``<p>``

    ````css
    p:nth-child(4) { 
       background-color: #3c763d;
    }
    ````
    
5. A partir de la troisième balise ``<p>`` selectionner toutes les deuxièmes balises ``<p>``

    ````css
    p:nth-child(2n+3) { 
       background-color: #3c763d;
    }
    ````
    
6. Toutes les balises ``<p>`` jusqu'à la troisième

    ````css
    p:nth-child(-n+3) { 
       background-color: #3c763d;
    }
    ````
    
7. Toutes les balises ``<p>`` au survole du curseur

    ````css
    p:hover {
       background-color: #3c763d;
    }
    ````
    
## Pseudo-éléments

![pseudo](img/pseudo-elem.png)



## Ressources

- [Liste des pseudo-classes](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)
- [CSS Cheat sheet](pdf/memento/CSS-Sheet.pdf)
- [Mémo CSS](pdf/memento/memo_css_proprietes.pdf)
- [memento CSS3](pdf/memento/memento-css3-v2.pdf)




---

[:back:](../chapitre-4/chapitre-4-selecteurs.md) | [:soon:]()


