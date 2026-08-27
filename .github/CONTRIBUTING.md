# Contribuer

## Avant de commencer

- ouvrir une issue pour un changement fonctionnel important ;
- partir de `main` à jour ;
- choisir une branche `feat/`, `fix/`, `docs/` ou `refactor/` ;
- ne jamais ajouter de donnée industrielle ou personnelle réelle.

## Développement

```bash
npm ci
npm run dev
npm run verify
```

Le changement doit fonctionner sur écran mobile et bureau, au clavier, et avec
`prefers-reduced-motion`.

## Pull request

Décrire le problème, la solution, la preuve de vérification et le risque. Ajouter
une capture seulement si elle ne contient aucune donnée confidentielle.

Une PR est prête lorsque la CI est verte, la documentation est cohérente et les
éléments temporaires ont été retirés.
