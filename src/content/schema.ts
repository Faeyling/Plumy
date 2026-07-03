export type Discipline =
  | 'classique'
  | 'contemporain'
  | 'moderne'
  | 'jazz'
  | 'cabaret'
  | 'pole-dance'
  | 'burlesque'
  | 'heels'
  | 'tango-argentin'
  | 'commun';

export type SousStyle =
  | 'jazz-classique'
  | 'broadway-jazz'
  | 'fosse'
  | 'modern-jazz'
  | 'lyrical-jazz'
  | 'street-jazz'
  | 'afro-jazz'
  | 'pole-sport'
  | 'pole-art'
  | 'exotic'
  | 'pole-theatre';

export type Categorie =
  | 'positions'
  | 'pas'
  | 'sauts'
  | 'tours'
  | 'ports-de-bras'
  | 'deplacements'
  | 'qualites-de-mouvement'
  | 'batterie'
  | 'equilibres'
  | 'liaisons'
  | 'concepts'
  | 'culture-histoire'
  | 'figures-aeriennes'
  | 'montees-climbs'
  | 'prises-grips'
  | 'inversions'
  | 'travail-au-sol'
  | 'jeu-de-scene'
  | 'accessoires'
  | 'sante-prevention';

export interface Terme {
  id: string;
  nom: string;
  alias?: string[];
  disciplines: Discipline[];
  sousStyles?: SousStyle[];
  categories: Categorie[];
  definition: string;
  description: string;
  erreursCourantes: string[];
  conseils?: string[];
  prononciation?: string;
  equivalentAnglais?: string;
  audioUrl?: string;
  animationId?: string;
  videosExternes?: { titre: string; url: string; source: string }[];
  termesLies?: string[];
  difficulteInterne: 1 | 2 | 3 | 4 | 5;
  etymologie?: string;
  securite?: {
    risques: string[];
    precautions: string[];
    referencesIds?: string[];
  };
}

export interface Cours {
  id: string;
  titre: string;
  resume: string;
  sections: { titre: string; contenuMarkdown: string; schemaId?: string }[];
  disciplines: Discipline[];
  termesAbordes?: string[];
  videosExternes?: { titre: string; url: string; source: string }[];
}

export interface QuestionQCMCours {
  type: 'cours';
  coursId: string;
  sectionIndex: number;
  question: string;
  bonneReponse: string;
  choix: string[];
}

export interface Unite {
  numero: number;
  titre: string;
  description: string;
  coursIds: string[];
  termeIds: string[];
  quizDisponibles: QuizType[];
  iconeSvgId: string;
}

export type QuizType =
  | 'qcm'
  | 'association'
  | 'reconnaissance-visuelle'
  | 'texte-a-trous'
  | 'flashcards';

export interface ProgressionTerme {
  termeId: string;
  statut: 'jamais-vu' | 'vu' | 'a-revoir' | 'maitrise';
  favori?: boolean;
  vuLe?: number;
  reussitesQuiz: number;
  echecsQuiz: number;
  prochainRevision?: number;
}

export interface StatsGlobales {
  points: number;
  badges: string[];
  serieJours: number;
  derniereVisite: number;
  quizJoues: number;
  historiqueActivite: { date: string; termesVus: number; quizReussis: number }[];
  dernierExport?: number;
  joursUsageDepuisExport?: number;
  dernierJourUsage?: string;
  rappelSauvegardeActif?: boolean;
  onboardingVu?: boolean;
}

export interface TermePersonnel extends Partial<Terme> {
  id: string;
  estPersonnel: true;
  noteLibre?: string;
  uniteId?: number;
}

export type ThemeReference =
  | 'epidemiologie'
  | 'psychologie'
  | 'hanche-turnout-flexibilite'
  | 'renforcement-neuromusculaire'
  | 'pole-dance'
  | 'talons-heels'
  | 'francophone'
  | 'physiologie'
  | 'culture-histoire';

export interface Reference {
  id: string;
  theme: ThemeReference;
  auteurs: string;
  annee: number;
  titre: string;
  revue?: string;
  lien?: string;
  disciplines?: Discipline[];
  resume?: string;
}
