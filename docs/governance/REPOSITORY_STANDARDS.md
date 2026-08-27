# Standard des dépôts publics

## Objectif

Chaque dépôt doit permettre à un visiteur de comprendre en moins de deux minutes :

1. le problème traité ;
2. la valeur du projet ;
3. comment le lancer ou consulter une démonstration ;
4. son état réel ;
5. les limites et règles de confidentialité.

## Structure minimale

```text
.
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   ├── CODEOWNERS
│   ├── CONTRIBUTING.md
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── architecture/
│   ├── governance/
│   └── archive/
├── src/
├── tests/                   # dès qu’une logique métier existe
├── README.md
├── CHANGELOG.md
├── ROADMAP.md
├── SECURITY.md
└── LICENSE
```

Les dossiers vides ne sont pas créés « pour faire propre ». Chaque dossier
existe parce qu’il porte une responsabilité claire.

## Nommage

- dépôts, dossiers, branches et fichiers techniques : `kebab-case` ;
- composants et types TypeScript : `PascalCase` ;
- variables et fonctions : `camelCase` ;
- documents datés : `YYYY-MM-DD-sujet.md` ;
- versions : SemVer (`v1.2.0`) ;
- branches : `feat/`, `fix/`, `docs/`, `refactor/`, `archive/`.

Sont interdits : `final`, `final-v2`, `nouveau`, `copie`, `test123` et
les dossiers imbriqués sans responsabilité distincte.

## Qualité attendue

- branche principale : `main` ;
- build reproductible à partir du lockfile ;
- lint et typecheck sans avertissement ;
- aucune clé, donnée client ou donnée ERP réelle ;
- dépendances surveillées par Dependabot ;
- PR courte, motivée et liée à un résultat vérifiable ;
- suppression des branches fusionnées.

## Cycle de vie

| État | Signal public | Action |
|---|---|---|
| Actif | README + roadmap à jour | développement normal |
| Maintenance | badge/statut explicite | correctifs uniquement |
| Expérimental | limites visibles | aucune promesse de stabilité |
| Remplacé | lien vers le successeur | dépôt GitHub archivé |
| Abandonné | raison documentée | dépôt GitHub archivé |

Le nombre de dépôts n’est pas un objectif. Un petit ensemble fiable vaut mieux
qu’une collection de prototypes sans mode d’emploi.
