# Confidentialité des contenus publics

## Règle

Le portfolio montre la capacité de résolution, pas les informations internes
d’un employeur ou d’un client.

## Interdit dans un dépôt public

- exports ERP, noms de clients ou fournisseurs ;
- références de pièces, plans, cotations et paramètres de procédé ;
- temps de production, coûts, prix ou volumes réels non publiés ;
- captures d’écran contenant des identifiants ;
- API, clés, jetons, mots de passe et fichiers `.env` ;
- noms, emails ou informations personnelles de collègues ;
- documents contractuels ou présentations internes.

## Autorisé

- données synthétiques générées pour la démonstration ;
- chiffres agrégés qui ne permettent aucune ré-identification ;
- schémas reconstruits et libellés génériques ;
- méthode, architecture et apprentissages exprimés sans information interne.

## Revue avant publication

1. rechercher secrets, coordonnées et références métier ;
2. vérifier les images, métadonnées et documents PDF ;
3. remplacer les données par un jeu synthétique ;
4. relire l’historique Git, pas seulement l’état courant ;
5. documenter l’anonymisation dans l’étude de cas.

En cas de doute, l’information reste privée.
