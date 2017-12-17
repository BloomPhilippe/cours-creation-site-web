# Configuration

## niveaux de configurations

Il y a trois niveaux de configurations :

.1 Le niveau système

   Ce niveau est le premier que Git va vérifier, il est commun à tous les utilisateurs de cette ordinateur.

   Exemple d'ajout de variable pour ce niveau :
   
   ````css
    git config --system core.editor vim
   ````

.2 Le niveau utilisateur

   Ce niveau se situe dans le répertoire (dossier) utilisateur. 
   Pour aller dans ce répertoire via les ligne de commande, il suffit de faire :
   
   ````css
    cd ~
   ````
   
   Pour vérifier si vous êtes bien dans le bon répertoire, effectué :
   
   ````css
    pwd
   ````
   
   Dans votre dossier utilisateur se trouve un fichier .gitconfig où sont stockées vos variables utilisateur.
   
   Exemple d'ajout de variable pour ce niveau :
      
  ````css
   git config --global user.name "votre pseudo"
  ````
   

.3 le niveau dépôt

   Ce niveau se situe dans le répertoire du projet, il permet d'avoir des configurations différentes par projet...
   
   Exemple d'ajout de variable pour ce niveau :
     
   ````css
    git config --local user.name "votre pseudo"
   ````
   
   Pour effectuer la commande ci-dessus, il faut se trouver dans le répertoire du projet en cours de modififcation.



# Configuration minimale

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