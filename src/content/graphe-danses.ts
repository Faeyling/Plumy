export type TypeNoeud = 'discipline' | 'origine' | 'sous-style' | 'mouvement'
export type Heritage = 'afro-americain' | 'noir-lgbtq' | 'travailleuses-du-sexe'

export interface Noeud {
  id: string
  label: string
  labelBis?: string
  periode?: string
  x: number
  y: number
  type: TypeNoeud
  heritage?: Heritage[]
  note?: string
}

export interface Lien {
  de: string
  vers: string
  type?: 'directe' | 'influence'
}

export const NW = 160
export const NH = 52

export const noeuds: Noeud[] = [
  // === ORIGINES (col 0, x=10) ===
  {
    id: 'traditions-africaines',
    label: 'Traditions africaines',
    periode: 'Antiquité',
    x: 10, y: 50,
    type: 'origine',
    heritage: ['afro-americain'],
  },
  {
    id: 'ballet-de-cour',
    label: 'Ballet de cour',
    periode: 'XVIe-XVIIe s.',
    x: 10, y: 200,
    type: 'origine',
  },
  {
    id: 'music-hall-vaudeville',
    label: 'Music-hall',
    labelBis: '& vaudeville',
    periode: 'XIXe s.',
    x: 10, y: 370,
    type: 'origine',
  },
  {
    id: 'strip-clubs',
    label: 'Strip-clubs',
    labelBis: '(noires, LGBTQ+)',
    periode: 'XXe s.',
    x: 10, y: 560,
    type: 'origine',
    heritage: ['noir-lgbtq', 'travailleuses-du-sexe'],
    note: "Créée par des travailleuses du sexe, majoritairement des femmes noires, racisées et LGBTQ+. Ce sont elles qui ont bâti le vocabulaire du pole moderne.",
  },
  {
    id: 'vogue-ballroom',
    label: 'Vogue & ballroom',
    periode: 'Années 1970',
    x: 10, y: 660,
    type: 'origine',
    heritage: ['noir-lgbtq'],
    note: "Né dans les communautés noires et LGBTQ+ de New York.",
  },
  {
    id: 'rio-de-la-plata',
    label: 'Río de la Plata',
    labelBis: '(Buenos Aires / Montevideo)',
    periode: 'XIXe s.',
    x: 10, y: 800,
    type: 'origine',
    heritage: ['afro-americain'],
    note: "Fusion du candombe africain, de la habanera cubaine et de la milonga européenne dans les conventillos porteños.",
  },

  // === TANGO ARGENTIN (col 1 bas) ===
  {
    id: 'tango-argentin',
    label: 'Tango argentin',
    periode: 'XIXe s. →',
    x: 220, y: 800,
    type: 'discipline',
    heritage: ['afro-americain'],
    note: "Né à Buenos Aires et Montevideo fin XIXe s. Reconnu au Patrimoine immatériel de l'UNESCO (2009). Milonga, vals et tango sont ses trois formes.",
  },

  // === TRANSITIONNELLE (col 1, x=220) ===
  {
    id: 'danses-afro-americaines',
    label: 'Danses',
    labelBis: 'afro-américaines',
    periode: 'XIXe s.',
    x: 220, y: 50,
    type: 'mouvement',
    heritage: ['afro-americain'],
  },
  {
    id: 'danse-classique',
    label: 'Danse classique',
    periode: 'XVIIe s. →',
    x: 220, y: 200,
    type: 'discipline',
  },
  {
    id: 'cabaret',
    label: 'Cabaret',
    periode: 'XIXe s. →',
    x: 220, y: 370,
    type: 'discipline',
  },
  {
    id: 'burlesque',
    label: 'Burlesque',
    periode: 'XIXe s. →',
    x: 220, y: 480,
    type: 'discipline',
  },

  // === DISCIPLINES (col 2, x=430) ===
  {
    id: 'jazz',
    label: 'Jazz',
    periode: 'Début XXe s.',
    x: 430, y: 50,
    type: 'discipline',
    heritage: ['afro-americain'],
  },
  {
    id: 'danse-moderne',
    label: 'Danse moderne',
    periode: '1900-1960',
    x: 430, y: 200,
    type: 'discipline',
  },
  {
    id: 'neo-burlesque',
    label: 'Néo-burlesque',
    periode: 'Années 1990 →',
    x: 430, y: 480,
    type: 'sous-style',
  },
  {
    id: 'pole-dance',
    label: 'Pole dance',
    periode: 'XXe s. →',
    x: 430, y: 610,
    type: 'discipline',
    heritage: ['noir-lgbtq', 'travailleuses-du-sexe'],
    note: "Née dans les strip-clubs, portée par des travailleuses du sexe, noires, racisées et LGBTQ+.",
  },

  // === GEN 2 (col 3, x=640) ===
  {
    id: 'danse-contemporaine',
    label: 'Danse',
    labelBis: 'contemporaine',
    periode: '1960 →',
    x: 640, y: 200,
    type: 'discipline',
  },
  {
    id: 'danses-urbaines',
    label: 'Danses urbaines',
    periode: 'Années 1970 →',
    x: 640, y: 370,
    type: 'mouvement',
  },

  // Pole sous-styles (col 3 bas)
  { id: 'pole-sport', label: 'Pole sport (IPSF)', x: 640, y: 560, type: 'sous-style' },
  { id: 'pole-art', label: 'Pole art', x: 640, y: 618, type: 'sous-style' },
  { id: 'exotic-pole', label: 'Exotic / Exotic flow', x: 640, y: 676, type: 'sous-style' },
  { id: 'pole-theatre', label: 'Pole théâtre', x: 640, y: 734, type: 'sous-style' },

  // === JAZZ SOUS-STYLES + HEELS (col 4, x=860) ===
  { id: 'jazz-classique', label: 'Jazz classique', x: 860, y: 10, type: 'sous-style' },
  { id: 'broadway-jazz', label: 'Broadway / Musical', x: 860, y: 68, type: 'sous-style' },
  { id: 'fosse', label: 'Technique Fosse', x: 860, y: 126, type: 'sous-style' },
  { id: 'modern-jazz', label: 'Modern jazz', x: 860, y: 184, type: 'sous-style' },
  { id: 'lyrical-jazz', label: 'Lyrical jazz', x: 860, y: 242, type: 'sous-style' },
  { id: 'street-jazz', label: 'Street jazz', x: 860, y: 300, type: 'sous-style' },
  {
    id: 'afro-jazz',
    label: 'Afro-jazz',
    x: 860, y: 358,
    type: 'sous-style',
    heritage: ['afro-americain'],
  },
  {
    id: 'heels',
    label: 'Heels',
    labelBis: '(carrefour)',
    periode: 'XXe s. →',
    x: 860, y: 450,
    type: 'discipline',
    note: "Carrefour : jazz/Fosse/Broadway + cabaret/burlesque + ballroom + hip-hop + danses latines + vogue/go-go.",
  },
]

export const liens: Lien[] = [
  { de: 'traditions-africaines', vers: 'danses-afro-americaines' },
  { de: 'danses-afro-americaines', vers: 'jazz' },
  { de: 'ballet-de-cour', vers: 'danse-classique' },
  { de: 'danse-classique', vers: 'danse-moderne' },
  { de: 'danse-classique', vers: 'jazz', type: 'influence' },
  { de: 'danse-moderne', vers: 'danse-contemporaine' },
  { de: 'music-hall-vaudeville', vers: 'cabaret' },
  { de: 'music-hall-vaudeville', vers: 'burlesque' },
  { de: 'burlesque', vers: 'neo-burlesque' },
  { de: 'cabaret', vers: 'heels' },
  { de: 'burlesque', vers: 'heels' },
  { de: 'jazz', vers: 'heels', type: 'influence' },
  { de: 'danses-urbaines', vers: 'heels' },
  { de: 'vogue-ballroom', vers: 'heels' },
  { de: 'strip-clubs', vers: 'pole-dance' },
  { de: 'jazz', vers: 'jazz-classique' },
  { de: 'jazz', vers: 'broadway-jazz' },
  { de: 'jazz', vers: 'fosse' },
  { de: 'jazz', vers: 'modern-jazz' },
  { de: 'jazz', vers: 'lyrical-jazz' },
  { de: 'jazz', vers: 'street-jazz' },
  { de: 'jazz', vers: 'afro-jazz' },
  { de: 'danses-urbaines', vers: 'street-jazz', type: 'influence' },
  { de: 'pole-dance', vers: 'pole-sport' },
  { de: 'pole-dance', vers: 'pole-art' },
  { de: 'pole-dance', vers: 'exotic-pole' },
  { de: 'pole-dance', vers: 'pole-theatre' },
  { de: 'exotic-pole', vers: 'heels', type: 'influence' },
  { de: 'rio-de-la-plata', vers: 'tango-argentin' },
  { de: 'traditions-africaines', vers: 'rio-de-la-plata', type: 'influence' },
]
