# Politique d’archivage

## Principe

L’archivage conserve une preuve utile sans polluer le travail actif. Il ne sert
pas à cacher un mauvais classement.

## Code et branches

- avant une refonte importante, créer `archive/pre-<sujet>-YYYY-MM-DD` ;
- conserver une seule branche source active : `main` ;
- supprimer toute branche fusionnée sous 30 jours ;
- taguer les versions publiées avec SemVer ;
- ne jamais utiliser un dossier `old/` comme système de version.

Les instantanés `archive/` sont exceptionnels : migration majeure, changement
de licence, suppression de données ou refonte structurelle. Ils sont en lecture
seule et référencés dans le changelog.

## Documents

Un document devient historique lorsqu’il a un successeur ou n’est plus
applicable. Il est déplacé vers :

```text
docs/archive/YYYY/YYYY-MM-DD-nom-du-document.md
```

L’index annuel précise :

| Champ | Exemple |
|---|---|
| Document | Ancienne architecture |
| Archivé le | 2026-08-27 |
| Motif | Remplacé par la refonte statique |
| Successeur | `docs/architecture/DECISIONS.md` |

## Dépôts

Un dépôt remplacé ou abandonné est marqué clairement dans son README, pointe
vers son successeur, puis utilise la fonction **Archive this repository** de
GitHub. Il n’est pas supprimé sauf présence de données sensibles.

## Rétention

- branches de travail fusionnées : 30 jours maximum ;
- artefacts CI : 14 jours ;
- releases stables : conservées ;
- instantanés de refonte : conservés tant qu’ils aident à l’audit ;
- données sensibles trouvées : suppression immédiate et rotation des secrets.
