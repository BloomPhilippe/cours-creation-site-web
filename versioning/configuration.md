# Configuration

## Niveaux de configurations

Il y a trois niveaux de configurations :

.1 Le niveau système

   Ce niveau est le premier que Git va vérifier, il est commun à tous les utilisateurs de cette ordinateur.

   Exemple d'ajout de variable pour ce niveau :
   
   ````
    git config --system core.editor vim
   ````

.2 Le niveau utilisateur

   Ce niveau se situe dans le répertoire (dossier) utilisateur. 
   Pour aller dans ce répertoire via les ligne de commande, il suffit de faire :
   
   ````
    cd ~
   ````
   
   Pour vérifier si vous êtes bien dans le bon répertoire, effectué :
   
   ````css
    pwd
   ````
   
   Dans votre dossier utilisateur se trouve un fichier .gitconfig où sont stockées vos variables utilisateur.
   
   Exemple d'ajout de variable pour ce niveau :
      
  ````
   git config --global user.name "votre pseudo"
  ````
   

.3 le niveau dépôt

   Ce niveau se situe dans le répertoire du projet, il permet d'avoir des configurations différentes par projet...
   
   Exemple d'ajout de variable pour ce niveau :
     
   ````
    git config --local user.name "votre pseudo"
   ````
   
   Pour effectuer la commande ci-dessus, il faut se trouver dans le répertoire du projet en cours de modififcation.



# Configurations minimales

La première chose à effectuer est d'ajouter la personne qui sera en charge des modifications sur cette ordinateur. 
Ainsi chaque commit sera accompagné du pseudonyme de la personne qui à effectué les changements.

En utilisant ````--global````, votre configuration sera paratgée avec tout les répertoire Git sur cette ordinateur donc vous n'effecturez cette commande qu'une fois.

````
git config --global user.name "votre pseudo"
git config --global user.email votre@email
````

Ou via l'éditeur de texte

````
git config --global -e
````


# Configurations secondaires

Ci-dessous, vous trouverez quelques exemple de variables configurations. 
Vous pouvez également trouver d'autres exemples [ici](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Configuration-de-Git)

- Choisir l'éditeur de texte lorsque Git ouvre un fichier

    ````
    git config --global core.editor "vim"
    ````
   
   [Plus de détails ici](https://help.github.com/articles/associating-text-editors-with-git/)
   
   
- Ajouter un gitignore global à tous les projets, il faut biensûre créer ce fichier au préalable

    ````
    git config --global core.excludesfile '~/.gitignore_global'
    ````
    
- Si vous souhaitez que Git vous aide à corriger vos commandes en cas d'erreur

    ````
    git config --global help.autocorrect 5
    ````
    
    La valeur 5 est en dixièmes de seconde donc Git executera la commande qu'il pense être bonne au bout de 0.5 secondes...
    
    
- Activer ou non la couleur pour certains résultats de commandes

    **Activer :**
    
    ````
    git config --global color.diff true
    ````
    
    **Désactiver :**
    
    ````
    git config --global color.diff false
    ````
    
- Modifier la couleur et le style des affichages

    **Pour les diff :**
        
    ````
    git config --global color.diff.meta "blue black bold"
    ````
    
- Formatage et espaces blancs

  Pour les personnes travaillant sur Windows, il est fortement recommandé d'ajouter la variable ci-dessous :
  
  ````
  git config --global core.autocrlf true
  ````
  
  Vous trouverez plus d'informations [ici](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Configuration-de-Git?#_formatage_et_espaces_blancs)