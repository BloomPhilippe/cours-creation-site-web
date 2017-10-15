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

