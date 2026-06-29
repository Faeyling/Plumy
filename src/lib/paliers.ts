export interface Palier {
  id: string
  nom: string
  symbole: string
  couleur: string
  seuilPts: number
  badgeId: string | null
}

export const PALIERS: Palier[] = [
  { id: 'graine',    nom: 'Graine de danseur',  symbole: '🌱', couleur: '#86efac', seuilPts: 0,     badgeId: null },
  { id: 'plume',     nom: 'Plume légère',        symbole: '🪶', couleur: '#a78bfa', seuilPts: 100,   badgeId: 'palier-plume' },
  { id: 'en-scene',  nom: 'En scène',            symbole: '💃', couleur: '#f472b6', seuilPts: 300,   badgeId: 'palier-en-scene' },
  { id: 'etoile',    nom: 'Étoile montante',     symbole: '⭐', couleur: '#fbbf24', seuilPts: 750,   badgeId: 'palier-etoile' },
  { id: 'role',      nom: 'Premier rôle',        symbole: '🎭', couleur: '#fb923c', seuilPts: 1500,  badgeId: 'palier-role' },
  { id: 'vedette',   nom: 'Vedette',             symbole: '🏆', couleur: '#f59e0b', seuilPts: 3000,  badgeId: 'palier-vedette' },
  { id: 'plumy-or',  nom: 'Plumy d\'or',         symbole: '🦚', couleur: '#10b981', seuilPts: 6000,  badgeId: 'palier-plumy-or' },
]

export function getPalierCourant(points: number): Palier {
  const courant = [...PALIERS].reverse().find(p => points >= p.seuilPts)
  return courant ?? PALIERS[0]
}

export function getPalierSuivant(points: number): Palier | null {
  return PALIERS.find(p => p.seuilPts > points) ?? null
}
