export const projectCategories = [
  "Tous",
  "Industrie 4.0",
  "Méthodes",
  "Data & qualité",
  "Produit numérique",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "Tous">;
export type ProjectAccent = "blue" | "amber" | "teal" | "violet";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  category: ProjectCategory;
  status: "Étude de cas" | "Démonstrateur" | "Prototype fonctionnel";
  accent: ProjectAccent;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  deliverables: string[];
  metrics: ProjectMetric[];
  tags: string[];
  featured: boolean;
  confidentiality?: string;
};

export const projects: Project[] = [
  {
    slug: "gestion-outillage-5-axes",
    title: "Gestion et codification d’un parc outillage 5 axes",
    eyebrow: "Du terrain vers un référentiel exploitable",
    period: "2025–2026",
    category: "Industrie 4.0",
    status: "Prototype fonctionnel",
    accent: "blue",
    summary:
      "Structuration d’un parc d’outils et de composants autour d’une codification stable, d’un modèle de données et d’une interface de consultation.",
    challenge:
      "Rendre une information technique dispersée assez fiable pour être utilisée au quotidien par les méthodes, la production et les futurs outils numériques.",
    approach: [
      "Observer les pratiques réelles et recenser les familles d’outils.",
      "Définir une codification à huit caractères lisible et extensible.",
      "Structurer les relations entre outil, montage, composant et usage.",
      "Prototyper une interface Retool et tester la logique avec les utilisateurs.",
    ],
    outcomes: [
      "Référentiel unique plus simple à maintenir.",
      "Recherche et lecture des montages plus cohérentes.",
      "Base préparée pour l’étiquetage, l’ERP et le suivi d’utilisation.",
    ],
    deliverables: [
      "Convention de codification",
      "Modèle de données",
      "Prototype Retool",
      "Règles de gouvernance",
    ],
    metrics: [
      { value: "50+", label: "outils et composants structurés" },
      { value: "8", label: "caractères par code standard" },
      { value: "1", label: "référentiel commun" },
    ],
    tags: ["Retool", "Codification", "Données", "Conduite du changement"],
    featured: true,
    confidentiality:
      "Étude présentée sans références, plans, paramètres d’usinage ni données industrielles réelles.",
  },
  {
    slug: "pilotage-ordres-fabrication",
    title: "Pilotage visuel des ordres de fabrication",
    eyebrow: "Une lecture planning conçue pour décider",
    period: "2026",
    category: "Data & qualité",
    status: "Démonstrateur",
    accent: "teal",
    summary:
      "Conception d’une vue Gantt Power BI enrichie avec Deneb pour rendre visibles la charge, les priorités et les risques de retard.",
    challenge:
      "Transformer des données ERP difficiles à lire en une vision partagée de l’avancement et des arbitrages de production.",
    approach: [
      "Clarifier les décisions attendues avant de choisir les indicateurs.",
      "Nettoyer et relier les données d’OF, d’opérations et de dates.",
      "Construire un Gantt Deneb adapté aux contraintes de l’atelier.",
      "Prévoir des filtres et états d’alerte compréhensibles sans formation lourde.",
    ],
    outcomes: [
      "Lecture plus directe des séquences et conflits de planning.",
      "Support commun entre production, méthodes et pilotage.",
      "Architecture réutilisable pour les vues charge, retard et priorité.",
    ],
    deliverables: [
      "Modèle de données",
      "Dashboard Power BI",
      "Spécification Deneb",
      "Guide de lecture",
    ],
    metrics: [
      { value: "ERP", label: "source structurante" },
      { value: "Gantt", label: "vue de pilotage" },
      { value: "Deneb", label: "visualisation sur mesure" },
    ],
    tags: ["Power BI", "Deneb", "ERP", "Planification"],
    featured: true,
    confidentiality:
      "Les exemples publiables utilisent exclusivement des données synthétiques et des libellés génériques.",
  },
  {
    slug: "spc-quality-tool",
    title: "SPC Quality Tool — analyse statistique hors ligne",
    eyebrow: "Rendre le SPC accessible sans infrastructure lourde",
    period: "2026",
    category: "Data & qualité",
    status: "Démonstrateur",
    accent: "amber",
    summary:
      "Application locale pour calculer la capabilité, visualiser les distributions et détecter les signaux de dérive d’un processus.",
    challenge:
      "Donner aux équipes une lecture fiable et pédagogique du comportement d’un procédé, y compris dans un environnement sans connexion.",
    approach: [
      "Importer ou saisir une série de mesures avec ses limites de spécification.",
      "Calculer les indicateurs avec des définitions visibles et vérifiables.",
      "Relier chaque alerte statistique à une explication opérationnelle.",
      "Permettre l’export des résultats pour conserver une preuve d’analyse.",
    ],
    outcomes: [
      "Lecture unifiée des cartes de contrôle et de la capabilité.",
      "Décisions facilitées grâce à des alertes interprétables.",
      "Démonstrateur utilisable avec des jeux de données synthétiques.",
    ],
    deliverables: [
      "Application web hors ligne",
      "Cartes de contrôle",
      "Calculs Cp/Cpk",
      "Export CSV",
    ],
    metrics: [
      { value: "Cp/Cpk", label: "capabilité expliquée" },
      { value: "100%", label: "fonctionnement local" },
      { value: "CSV", label: "export des analyses" },
    ],
    tags: ["SPC", "Qualité", "Statistiques", "Offline"],
    featured: true,
  },
  {
    slug: "mes-fabrication-additive",
    title: "MES et décision économique en fabrication additive",
    eyebrow: "Relier production, métrologie et décision",
    period: "2026",
    category: "Industrie 4.0",
    status: "Étude de cas",
    accent: "violet",
    summary:
      "Étude d’un flux numérique de la fabrication à la métrologie, avec exploitation des résultats de contrôle et critères de décision économique.",
    challenge:
      "Concevoir un enchaînement de données cohérent entre exécution, post-traitement, mesure et décision, sans créer un système impossible à maintenir.",
    approach: [
      "Cartographier le flux physique et les décisions associées.",
      "Définir les événements, données et responsabilités du MES.",
      "Analyser les résultats métrologiques et leur qualité.",
      "Relier la conformité technique aux choix de reprise, rebut ou validation.",
    ],
    outcomes: [
      "Architecture fonctionnelle documentée.",
      "Traçabilité des décisions de conformité.",
      "Lecture économique intégrée au scénario industriel.",
    ],
    deliverables: [
      "Cartographie de flux",
      "Architecture MES",
      "Analyse métrologique",
      "Rapport de décision",
    ],
    metrics: [
      { value: "385", label: "résultats MMT analysés" },
      { value: "MES", label: "fil conducteur numérique" },
      { value: "1", label: "dossier de décision" },
    ],
    tags: ["MES", "Métrologie", "Fabrication additive", "Data"],
    featured: true,
  },
  {
    slug: "industrialisation-bras-levier",
    title: "Industrialisation d’un bras de levier aluminium",
    eyebrow: "De la reconception à la mise en production",
    period: "2023",
    category: "Méthodes",
    status: "Étude de cas",
    accent: "amber",
    summary:
      "Reconception et industrialisation complète d’un composant d’étiqueteuse : CAO, simulation, outillage, moulage, coulée et contrôle.",
    challenge:
      "Faire évoluer une pièce existante vers une solution industrialisable, documentée et contrôlable dans les conditions réelles de production.",
    approach: [
      "Reconcevoir la géométrie en intégrant procédé et tolérances.",
      "Préparer le système de coulée et l’outillage.",
      "Formaliser les opérations de moulage, coulée et contrôle.",
      "Valider la démarche par une production et une revue de résultats.",
    ],
    outcomes: [
      "Processus complet formalisé.",
      "Fabrication et contrôle préparés avant lancement.",
      "Projet de fin d’études évalué à 19/20.",
    ],
    deliverables: ["CAO", "Simulation de coulée", "Outillage", "Procédures qualité"],
    metrics: [
      { value: "19/20", label: "évaluation du projet" },
      { value: "1", label: "processus industrialisé" },
      { value: "A→Z", label: "périmètre du projet" },
    ],
    tags: ["Industrialisation", "Fonderie", "CAO", "Qualité"],
    featured: false,
  },
  {
    slug: "chess-progress-coach",
    title: "Chess Progress Coach",
    eyebrow: "Un produit personnel centré sur l’apprentissage",
    period: "2026",
    category: "Produit numérique",
    status: "Prototype fonctionnel",
    accent: "violet",
    summary:
      "Prototype d’analyse post-partie et d’entraînement ciblé à partir des parties publiques Chess.com, conçu autour du fair-play.",
    challenge:
      "Transformer l’historique d’un joueur en exercices utiles sans fournir d’assistance pendant une partie en cours.",
    approach: [
      "Importer les parties publiques et parser les PGN localement.",
      "Identifier les moments pédagogiques après la partie.",
      "Construire un parcours d’entraînement par répétition espacée.",
      "Tester systématiquement les positions et solutions avant publication.",
    ],
    outcomes: [
      "Architecture produit découpée en import, analyse et entraînement.",
      "Stockage local respectueux des données de l’utilisateur.",
      "Règles de fair-play intégrées à la conception.",
    ],
    deliverables: ["Import PGN", "Analyse post-partie", "Entraînement", "Checklist QA"],
    metrics: [
      { value: "PGN", label: "format d’entrée" },
      { value: "Local", label: "stockage utilisateur" },
      { value: "Fair-play", label: "contrainte produit" },
    ],
    tags: ["React", "TypeScript", "Chess.js", "Produit"],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
