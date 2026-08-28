# Environnements

Le portfolio est un export statique. Il ne dépend d'aucun service d'exécution,
d'aucune base de données et d'aucun secret.

| Environnement | Source | Publication | Données et secrets |
|---|---|---|---|
| Local | Branche de travail | `npm run dev` | Aucun |
| Preview | Pull request | Vercel Preview | Aucun secret de production |
| Production | Branche `main` | GitHub Pages + miroir Vercel | Aucun |

## Règles communes aux futures applications

1. Un service et ses secrets appartiennent à une seule application.
2. Les environnements de développement, preview et production sont isolés.
3. Seules les variables explicitement publiques portent le préfixe
   `NEXT_PUBLIC_`.
4. Les clés secrètes restent côté serveur et ne sont jamais copiées dans une
   issue, une PR, un log, une capture d'écran ou un fichier versionné.
5. Un fichier `.env.example` documente uniquement les noms de variables, jamais
   leurs valeurs.
6. Toute rotation ou modification de schéma est tracée dans le dépôt concerné.

Voir [VERCEL.md](VERCEL.md) pour les déploiements et [SUPABASE.md](SUPABASE.md)
pour les données.
