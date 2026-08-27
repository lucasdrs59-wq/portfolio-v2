# Lucas Desrousseaux — Portfolio

[![CI](https://github.com/lucasdrs59-wq/portfolio-v2/actions/workflows/ci.yml/badge.svg)](https://github.com/lucasdrs59-wq/portfolio-v2/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-10213D)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3D68F5)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-178F83.svg)](LICENSE)

Portfolio public de **Lucas Desrousseaux**, à l’intersection des méthodes, de
l’industrialisation, de la métallurgie et de l’Industrie 4.0.

**Site : [lucasdrs59-wq.github.io](https://lucasdrs59-wq.github.io)**

## Ce que montre ce dépôt

- six études de cas orientées problème → démarche → livrables → résultats ;
- une interface claire, responsive et accessible ;
- des filtres projets et aperçus interactifs sans dépendance front superflue ;
- une publication statique compatible GitHub Pages ;
- un standard de documentation, confidentialité et archivage réutilisable.

Les situations industrielles sont anonymisées. Les chiffres, libellés et jeux de
données publiables sont synthétiques ou suffisamment agrégés pour ne révéler
aucune information interne.

## Démarrage rapide

Prérequis : Node.js 22 et npm 10 ou supérieur.

```bash
git clone https://github.com/lucasdrs59-wq/portfolio-v2.git
cd portfolio-v2
npm ci
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Commandes

| Commande | Usage |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run lint` | Contrôle ESLint, zéro avertissement accepté |
| `npm run typecheck` | Vérification TypeScript stricte |
| `npm run build` | Export statique dans `out/` |
| `npm run verify` | Lint + types + build |

## Architecture

```text
.
├── .github/                 # CI, Dependabot, modèles et responsabilités
├── docs/
│   ├── architecture/        # Décisions techniques
│   ├── archive/             # Index des documents historiques
│   ├── governance/          # Standards, archivage, confidentialité
│   └── projects/            # Modèle éditorial des études de cas
├── public/
│   └── brand/               # Identité LD et visuel social
└── src/
    ├── app/                 # Routes, SEO et pages
    ├── components/          # Shell, logo, exploration des projets
    └── lib/projects.ts      # Source unique du contenu projet
```

## Principes de contribution

1. Ouvrir une branche courte depuis `main`.
2. Garder les données industrielles hors du dépôt.
3. Expliquer le pourquoi dans la PR et les décisions structurantes dans
   `docs/architecture/`.
4. Exécuter `npm run verify`.
5. Fusionner puis supprimer la branche.

Le détail se trouve dans [CONTRIBUTING.md](.github/CONTRIBUTING.md) et dans les
[standards de dépôt](docs/governance/REPOSITORY_STANDARDS.md).

## Archivage et sécurité

- un instantané distant `archive/pre-premium-2026-08-27` conserve l’état avant refonte ;
- les branches de travail sont supprimées après fusion ;
- les versions publiées utilisent des tags sémantiques ;
- les documents obsolètes sont indexés dans `docs/archive/YYYY/` ;
- toute vulnérabilité doit être signalée selon [SECURITY.md](SECURITY.md).

## Licence

Code sous [licence MIT](LICENSE). Les textes, visuels personnels et marques
employeurs restent attribués à leurs propriétaires respectifs.
