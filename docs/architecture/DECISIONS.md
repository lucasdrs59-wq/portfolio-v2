# Décisions d’architecture

## ADR-001 — Export statique

**Décision :** utiliser `output: "export"` de Next.js.

**Pourquoi :** le contenu est éditorial et interactif côté client ; aucun serveur
n’est nécessaire. L’export peut être publié directement sur GitHub Pages.

**Conséquence :** pas de route serveur ni d’optimisation d’image à la volée.

## ADR-002 — Source projet unique

**Décision :** conserver les études dans `src/lib/projects.ts`.

**Pourquoi :** les cartes, filtres, modals, pages et métadonnées partagent le
même contenu typé. Cela évite les divergences.

**Évolution possible :** passer à MDX si les études deviennent nettement plus
longues ou nécessitent des médias spécifiques.

## ADR-003 — Interactions sans bibliothèque UI

**Décision :** implémenter filtres et aperçu avec React et CSS natifs.

**Pourquoi :** réduire le poids, le risque de dépendance et le coût de maintenance.

## ADR-004 — Pas de CV personnel public

**Décision :** remplacer le PDF historique par une page de parcours public.

**Pourquoi :** le PDF exposait des coordonnées privées et vieillissait sans
signal visible. Le CV détaillé reste disponible sur demande.

## ADR-005 — Style système

**Décision :** utiliser une pile de polices système, des variables CSS et une
identité LD propriétaire.

**Pourquoi :** rendu rapide, aucune requête vers un fournisseur de polices et
cohérence sur toutes les pages.

## ADR-006 — Hébergement statique et services découplés

**Décision :** conserver GitHub Pages comme URL publique canonique et Vercel
comme miroir de production et moteur de previews. Ne connecter Supabase qu'à
une application nécessitant réellement des données, une authentification ou des
fonctions serveur.

**Pourquoi :** le portfolio n'a ni secret ni donnée dynamique. Le découplage
réduit la surface d'attaque, évite les coûts inutiles et permet de faire évoluer
chaque future application avec ses propres environnements.

**Conséquence :** aucune variable d'environnement n'est requise pour ce dépôt.
Une future application Supabase doit conserver ses migrations dans son propre
dépôt et séparer strictement développement, preview et production.
