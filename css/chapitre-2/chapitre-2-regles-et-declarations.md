# Règles et déclarations

En CSS, il y a 4 éléments :

- Un sélecteur
- Une déclaration
- Une propriété
- Une valeur

Ci-dessous, le shémas représentant ces 4 élément :

![CSS 2](../img/regles-declarations-1.png)

## Exemple

Dans notre fichier HTML chapitre-2, nous constatons qu'il y a deux balise p

````html
   <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laboriosam repudiandae sapiente. Alias blanditiis deleniti illum molestiae nobis possimus quae rem voluptatum! Aliquid esse, eveniet ipsum maiores modi quas unde?</p>
    </section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis numquam rem. Eaque excepturi nesciunt nihil quisquam veritatis voluptate! Delectus, impedit iste iusto porro praesentium quod repellat tempore ut voluptas?</p>
````

Une qui se trouve dans section et l'autre en dehors.

Dans mon fichier CSS, je modifie l'aspect visuel de celle qui se trouve dans section à l'aide du selecteur ci-dessous :

````css
header h1
````

