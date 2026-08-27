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
