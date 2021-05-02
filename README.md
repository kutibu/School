Présentation du projet :

    Le but de notre projet est de pouvoir réaliser des appels sur un serveur discord scolaire et de manipuler ces appels.

    Les fonctionnalités sont les suivantes,
        - Faire l'appel
        - Connaître le nombre d'absence durant l'année d'un élève
        - Récupérer les listes des appels sur une journée


Comment installer/utiliser le bot discord :

    Veuillez mettre le token de votre BOT dans config.js

    Le token sera à remplacer manuellement dans le fichier config.json à la racine du projet.

    Dans notre projet nous avons créé deux classes, la classe "lp-fi" et la classe "lp-app".

    Pour essayer les fonctionnalités il faut attribuer des rôles lp-fi et lp-app à des membres de votre serveur discord (élèves).
    Il faudra créer ces roles sur votre serveur avec le même nom.

    Il faut que les membres du seveur change leurs pseudo sur le serveur en mettant leurs "Nom + Prenom".

    COMMANDES:

        !appel [classe]
        Exemple de la commande : !appel lp-fi
        Paramètres possible : lp-fi, lp-app
        But : Le but de cette commande est de permettre aux élèves de cocher le formulaire afin de valider leurs présences,
                une fois cela fais au bout de 8 secondes l'appel est envoyé dans la base de données stockants les absents
                de la classe et les présents.

        !absence [Nom de l'élève]
        Exemple de la commande : !absence Broeks Florian
        But : Le but de cette commande est de savoir combien de fois l'élève sélectionné à été absent dans l'année scolaire.

        !historique
        But : Le but de cette commande est affiche la lsite des élèves présent et absent 

Overleaft du groupe :

Teffahi Ryan : https://fr.overleaf.com/8888314658wckxyydcgngd

Hama Daouda Boubacar : https://www.overleaf.com/read/pwwwyyyjwvnh

Broeks Florian : https://fr.overleaf.com/6949183171dfywtscqcwxm

Benoit Peutevynck : https://www.overleaf.com/6442615179bmjwkjsnzpcp

Noblet Damien : https://www.overleaf.com/read/dnkhqvmhmctb
