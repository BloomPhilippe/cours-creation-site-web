# Création d'un nouveau projet

La première étape est initialiser Git dans le dossier de votre projet via la commande ci-dessous :

````
git init
````

Un projet Git est composé de trois zones :

- Le répertoire de travail

    Le répertoire de travail est le dossier où se situe vos fichiers de HTML, CSS, Javascript, etc...
    C'est le dossier du projet, du site, de l'application sur lequel vous travaillez actuellement.
    
    Exemple de structure ci-dessous :
    
    ````
    |-- css
    |   `-- main.css
    |
    `-- js
    |   `-- main.js
    |
    |-- exemple.html    
    ````


- l'index

   L'index est une zone transitoire entre le répertoire de travail et le dépot, il est appelé également staging.
   
   Il est situé dans le dossier .git de votre projet, c'est un fichier binaire nommé index
   
   Pour passer du répertoire de travail à l'index, il faut effectuer un ``git add``
   
   Tant que vous n'effectuez pas un ``git add``, Git n'a pas conscience qu'il y un nouveau fichier ou qu'un fichier a été modifier.


- le dépôt

  Le dépôt est le dossier caché nommé .git, il permet de stocker toutes les modifications, versions, branches, etc...
  
  Pour passer de l'index au dépôt, il faut effectuer un ``git commit``
  
  Exemple de structure du dossier du dépôt (.git) :
  
  ````
  |-- HEAD
  |-- config
  |-- description
  |-- hooks
  |   |-- applypatch-msg.sample
  |   |-- commit-msg.sample
  |   |-- fsmonitor-watchman.sample
  |   |-- post-update.sample
  |   |-- pre-applypatch.sample
  |   |-- pre-commit.sample
  |   |-- pre-push.sample
  |   |-- pre-rebase.sample
  |   |-- pre-receive.sample
  |   |-- prepare-commit-msg.sample
  |   `-- update.sample
  |-- index
  |-- info
  |   `-- exclude
  |-- objects
  |   |-- e6
  |   |   `-- 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
  |   |-- info
  |   `-- pack
  `-- refs
      |-- heads
      `-- tags
  ````
  
  
**Schéma fonctionnel**
======================

![schema](image/schemas-2.png)
 