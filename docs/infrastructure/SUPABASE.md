# Supabase

## Position actuelle

Le portfolio n'utilise pas Supabase. Le projet historique présent dans le compte
reste inactif tant qu'une application ne justifie pas sa restauration ou son
remplacement. Cette décision évite une ressource active, non attribuée et sans
propriétaire technique clair.

## Standard pour une future application

- un projet Supabase est nommé d'après l'application et son environnement ;
- les migrations SQL et fonctions Edge sont versionnées dans le dépôt de
  l'application ;
- la région est choisie près des utilisateurs et conforme aux contraintes de
  données ;
- Row Level Security est activée sur chaque table exposée ;
- les droits Data API sont accordés explicitement aux rôles nécessaires ;
- la clé publiable peut être utilisée côté client avec RLS ;
- une clé secrète ou de service reste exclusivement côté serveur ;
- les sauvegardes et la restauration sont testées avant toute donnée réelle.

## Topologie cible

| Usage | Cible | Données réelles |
|---|---|---|
| Développement | Projet ou branche de développement | Non |
| Preview | Branche éphémère si disponible | Non |
| Production | Projet dédié | Oui, avec RLS et sauvegardes |

La création d'un projet payant ou d'une branche facturable nécessite une
estimation de coût et une validation explicite avant exécution.
