export type Project = {
  slug: string;
  title: string;
  period: string;
  tags: string[];
  intro: string;
  highlights: string[];
  sections: {
    title: string;
    bullets: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "fonderie-prototype-sablerie",
    title: "Fonderie fonte — Suivi production prototype & résolution de problèmes (sableriE)",
    period: "BTS • Stage (8 semaines)",
    tags: ["Fonderie", "Production", "Qualité", "Terrain"],
    intro:
      "Projet terrain centré sur le suivi d’une production prototype et la résolution de problèmes en sablerie, avec capitalisation des actions.",
    highlights: [
      "Suivi de production sur pièce prototype (atelier).",
      "Analyse des causes + actions correctives (terrain).",
      "Standardisation progressive et retour d’expérience.",
    ],
    sections: [
      {
        title: "Contexte & objectif",
        bullets: [
          "Production prototype en fonderie fonte.",
          "Réduire les défauts/variabilités constatés en sablerie.",
          "Mettre en place une démarche structurée (simple, terrain).",
        ],
      },
      {
        title: "Démarche",
        bullets: [
          "Observation atelier + collecte des faits (quoi/où/quand).",
          "Analyse causes (5 Why / Ishikawa selon le cas).",
          "Tests d’actions correctives + validation.",
        ],
      },
      {
        title: "Livrables",
        bullets: [
          "Synthèse problème / causes / actions.",
          "Standard / consignes atelier (si applicable).",
          "Capitalisation (retour d’expérience).",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "Résultats anonymisés (chiffres ajoutables plus tard).",
          "Stabilisation / réduction de défauts (qualitatif).",
        ],
      },
    ],
  },
  {
    slug: "industrialisation-bras-levier-alu",
    title: "Industrialisation — Reconception bras de levier aluminium (étiqueteuse)",
    period: "BTS • Projet de fin d’année",
    tags: ["Industrialisation", "CAO", "Outillage", "Qualité"],
    intro:
      "Reconception complète d’une pièce (bras de levier) avec préparation industrialisation : CAO, simulation, outillage, mise en production et qualité.",
    highlights: [
      "Conception CAO + préparation industrialisation.",
      "Simulation de coulée + préparation outillage.",
      "Procédures moulage/coulée + contrôle qualité.",
    ],
    sections: [
      {
        title: "Contexte & objectif",
        bullets: [
          "Reconcevoir une pièce pour fiabilité / fabricabilité.",
          "Préparer la mise en production avec outillage.",
          "Sécuriser la qualité via procédure et contrôle.",
        ],
      },
      {
        title: "Démarche",
        bullets: [
          "CAO + itérations de conception.",
          "Simulation (coulée) + choix techniques.",
          "Outillage + essais + ajustements.",
        ],
      },
      {
        title: "Livrables",
        bullets: [
          "Dossiers CAO.",
          "Procédures moulage/coulée.",
          "Plan de contrôle / critères qualité.",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "Prototype / mise en production (selon périmètre).",
          "Qualité sécurisée par standards (qualitatif).",
        ],
      },
    ],
  },
  {
    slug: "chaudronnerie-chiffrage-be-suivi",
    title: "Chaudronnerie — Chiffrage, BE & suivi atelier",
    period: "Licence • Alternance",
    tags: ["Chiffrage", "BE", "Suivi prod", "Standardisation"],
    intro:
      "Structuration d’outils de chiffrage et support bureau d’études/atelier : suivi d’affaires, CAO et rédaction de notices.",
    highlights: [
      "Création/structuration d’outils Excel de chiffrage.",
      "Suivi d’affaires et support atelier (terrain).",
      "CAO installations + notices techniques.",
    ],
    sections: [
      {
        title: "Contexte & objectif",
        bullets: [
          "Chiffrage basé sur l’expérience → besoin d’outil plus structuré.",
          "Améliorer la cohérence et la traçabilité.",
          "Gagner du temps au quotidien.",
        ],
      },
      {
        title: "Démarche",
        bullets: [
          "Analyse des postes de coûts (temps, matière, sous-traitance).",
          "Création d’un modèle Excel clair et réutilisable.",
          "Itérations avec l’équipe (validation terrain).",
        ],
      },
      {
        title: "Livrables",
        bullets: [
          "Tableau Excel de chiffrage (version standard).",
          "Règles / hypothèses documentées.",
          "Support BE/atelier (plans, notices).",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "Chiffrages plus rapides et cohérents (qualitatif).",
          "Base réutilisable et améliorable.",
        ],
      },
    ],
  },
  {
    slug: "industrie4-erp-inventaire-codification",
    title: "Usine 4.0 — ERP, inventaire & codification atelier",
    period: "Mastère • Projet",
    tags: ["ERP", "Data", "Méthodes", "Déploiement"],
    intro:
      "Co-pilotage d’un projet ERP avec un gros lot terrain : inventaire, cartographie d’emplacements, codification et étiquetage pour produire une donnée exploitable.",
    highlights: [
      "Modes opératoires + accompagnement.",
      "Cartographie emplacements + étiquetage atelier.",
      "Codification pièces/emplacements + data exploitable ERP.",
    ],
    sections: [
      {
        title: "Contexte & objectif",
        bullets: [
          "Structurer l’atelier pour fiabiliser l’inventaire.",
          "Créer une codification simple et déployable.",
          "Rendre la donnée exploitable par l’ERP.",
        ],
      },
      {
        title: "Démarche",
        bullets: [
          "Définition des zones / emplacements (terrain).",
          "Codification + règles de nommage.",
          "Étiquetage + création des données.",
        ],
      },
      {
        title: "Livrables",
        bullets: [
          "Cartographie atelier (emplacements).",
          "Modèles d’étiquettes standard.",
          "Mode opératoire inventaire / saisie.",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "Inventaire plus fiable et plus rapide (qualitatif).",
          "Base structurée pour l’ERP (qualitatif).",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
