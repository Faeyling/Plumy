export interface SituationScene {
  termeId: string
  situation: string
}

export const situationsScene: SituationScene[] = [
  // ── Classique ──────────────────────────────────────────────────────────────
  {
    termeId: 'plie',
    situation: "Tu fléchis les genoux, les talons restent collés au sol, le dos reste droit. Un fil imaginaire te tire vers le haut pendant que tu descends.",
  },
  {
    termeId: 'releve',
    situation: "Tu pousses dans le sol et tu t'élèves : les talons décollent, tu te retrouves sur la pointe ou la demi-pointe.",
  },
  {
    termeId: 'arabesque',
    situation: "Tu tiens l'équilibre sur une jambe. L'autre s'allonge derrière toi, bien tendue. Les bras s'ouvrent en ligne, le regard part au loin.",
  },
  {
    termeId: 'pirouette',
    situation: "Tu prends ton élan, tu passes sur demi-pointe, et tu tournes sur toi-même. Ton regard accroche un point fixe puis fouette la tête pour suivre le tour.",
  },
  {
    termeId: 'developpe',
    situation: "Ta jambe pliée remonte lentement le long du corps. Le genou monte d'abord, puis la jambe s'allonge dans l'espace, loin de toi.",
  },
  {
    termeId: 'attitude',
    situation: "Tu t'équilibres sur une jambe. L'autre s'élève derrière toi — genou plié, ouvert depuis la hanche, comme encadré dans l'air.",
  },
  {
    termeId: 'assemble',
    situation: "Tu sautes depuis une jambe. La seconde vient rejoindre la première en l'air, et tu atterris les deux pieds joints.",
  },
  {
    termeId: 'fouette',
    situation: "En tournant, ta jambe part en coup de fouet sur le côté, le genou se replie, et l'élan te fait tourner encore.",
  },
  {
    termeId: 'pas-de-bourree',
    situation: "Trois petits pas rapides, presque sans quitter le sol : dessous, dessus, à côté. Les pieds brodent le plancher.",
  },
  {
    termeId: 'glissade',
    situation: "Un pas qui glisse d'un pied sur l'autre, presque furtif. Tu sembles préparer quelque chose de plus grand juste après.",
  },
  {
    termeId: 'grand-battement',
    situation: "Ta jambe part d'un coup droit vers le haut, tendue et rapide, avant de revenir au sol avec contrôle.",
  },
  {
    termeId: 'port-de-bras',
    situation: "Tes bras s'ouvrent et se ferment lentement en suivant une trajectoire arrondie. Comme si l'air autour avait du poids.",
  },
  {
    termeId: 'pas-de-chat',
    situation: "Tu sautes en ramenant les deux genoux l'un après l'autre vers la poitrine, comme si tu enjambais quelque chose en l'air.",
  },
  {
    termeId: 'chaines',
    situation: "Tu tournes en avançant : un pied, puis l'autre, les bras serrés, les tours s'enchaînent dans une diagonale rapide.",
  },
  {
    termeId: 'fondu',
    situation: "La jambe de support fléchit lentement pendant que l'autre s'allonge. Le mouvement est doux, progressif, comme fondre.",
  },
  {
    termeId: 'jete',
    situation: "Tu te propulses depuis une jambe et tu t'envoles. L'autre jambe s'étire en l'air, et tu atterris sur la jambe opposée.",
  },
  // ── Contemporain ────────────────────────────────────────────────────────────
  {
    termeId: 'suspension',
    situation: "Au sommet d'un saut ou d'un balancement, le corps semble flotter une fraction de seconde. Comme si le temps marquait une pause.",
  },
  {
    termeId: 'chute-controlee',
    situation: "Tu te laisses aller vers le sol — mais tu guides chaque centimètre de la descente. Ce n'est pas un accident, c'est un choix.",
  },
  {
    termeId: 'release-technique',
    situation: "Les muscles se relâchent juste assez. Le mouvement n'est pas poussé, il coule de lui-même, depuis l'intérieur du corps.",
  },
  {
    termeId: 'rebond-swing',
    situation: "Un mouvement prend de l'élan, monte, et au lieu de s'arrêter il repart dans l'autre sens — comme un pendule qui ne s'arrête pas.",
  },
  {
    termeId: 'spirale',
    situation: "Le buste tourne depuis le bas du dos vers les épaules, une vertèbre après l'autre, dans un mouvement de vrille continue.",
  },
  {
    termeId: 'floorwork',
    situation: "Tu danses au sol — roulades, glissés, retournements. Le plancher devient une partenaire à part entière.",
  },
  {
    termeId: 'contraction-release',
    situation: "Le ventre se creuse profondément vers la colonne, le dos s'arrondit comme sous un coup invisible — puis tout s'ouvre à nouveau.",
  },
  {
    termeId: 'desequilibre',
    situation: "Tu penches intentionnellement le corps au-delà de son centre, tu joues avec la limite du déséquilibre avant de te rattraper.",
  },
  {
    termeId: 'vibration',
    situation: "Une partie du corps tremble très rapidement de façon répétée — la main, la tête, l'épaule — comme sous une impulsion électrique.",
  },
  {
    termeId: 'torsion',
    situation: "Le haut du corps tourne dans un sens pendant que le bas reste face à l'autre. Les deux parties du corps vont dans des directions opposées.",
  },
  // ── Jazz ────────────────────────────────────────────────────────────────────
  {
    termeId: 'isolation',
    situation: "La tête se déplace seule à droite, puis revient. Le reste du corps ne bouge pas d'un millimètre.",
  },
  {
    termeId: 'groove',
    situation: "Le corps s'installe dans le rythme. Un léger balancement, une pulsation intérieure qui colore chaque geste sans qu'on puisse vraiment le nommer.",
  },
  {
    termeId: 'ball-change',
    situation: "Un transfert de poids rapide d'un pied sur l'autre — pointe, puis pied plat — en deux temps qui claquent.",
  },
  {
    termeId: 'jazz-walk',
    situation: "Tu avances, les hanches oscillent légèrement à chaque pas. La pointe du pied touche le sol en premier, le talon suit.",
  },
  {
    termeId: 'jazz-square',
    situation: "Quatre pas tracent un carré invisible au sol : en avant, de côté, en arrière, de côté. Les pieds reviennent à la case départ.",
  },
  {
    termeId: 'undulation',
    situation: "Une vague traverse le corps de la poitrine jusqu'au bassin en séquence — poitrine, ventre, hanches — continue et fluide.",
  },
  {
    termeId: 'flat-back',
    situation: "Le buste s'incline en avant, parfaitement horizontal. Le dos forme une table, les bras s'allongent dans le prolongement.",
  },
  {
    termeId: 'syncope',
    situation: "Le mouvement arrive légèrement avant le temps fort, ou juste après. L'accent est décalé — surprenant, mais voulu.",
  },
  // ── Heels ───────────────────────────────────────────────────────────────────
  {
    termeId: 'body-roll-heels',
    situation: "Une vague commence dans la poitrine, descend jusqu'au bassin, en talons. Lente, fluide, tout le corps y passe.",
  },
  {
    termeId: 'hair-toss',
    situation: "La tête part en arrière d'un seul élan, les cheveux suivent, puis tout revient vers l'avant. Un geste bref, total.",
  },
  {
    termeId: 'strut',
    situation: "Tu avances, chaque pas est posé avec une intention nette. Les talons frappent le sol, la posture dit : je suis là.",
  },
  {
    termeId: 'sass',
    situation: "Le poids se pose sur une hanche, un bras part sur le côté. Toute la posture devient une déclaration sans un mot.",
  },
  {
    termeId: 'floorwork-heels',
    situation: "Tu te poses au sol, en talons, et tu continues à danser — glissés, retournements, poses. Le sol n'est pas une chute, c'est une scène.",
  },
  // ── Cabaret ─────────────────────────────────────────────────────────────────
  {
    termeId: 'high-kick',
    situation: "La jambe monte rapidement et haut devant toi, tendue, genou parfaitement droit. Un coup net, précis, vers le haut.",
  },
  {
    termeId: 'fan-kick',
    situation: "La jambe monte de côté et décrit un grand arc en l'air, du bas vers le haut, comme un éventail qui s'ouvre.",
  },
  {
    termeId: 'chorus-line',
    situation: "Plusieurs danseurs alignés côte à côte font exactement le même geste au même moment. Une seule ligne, un seul corps.",
  },
  {
    termeId: 'grand-ecart-cancan',
    situation: "Tu sautes, et à l'atterrissage les deux jambes s'ouvrent à 180° face au public — les bras vers le haut, l'atterrissage au sol.",
  },
  {
    termeId: 'galop-cancan',
    situation: "Un pas vif de côté où un pied en chasse l'autre en rythme rapide, les jambes croisent et s'ouvrent en cadence.",
  },
  // ── Pole ────────────────────────────────────────────────────────────────────
  {
    termeId: 'spin-pole',
    situation: "Tu t'accroches à la barre et tu tournes autour d'elle, les jambes tendues ou repliées selon la figure — la gravité t'aide.",
  },
  {
    termeId: 'inversion-pole',
    situation: "Tes jambes montent au-dessus de ta tête. Tu te retrouves à l'envers sur la barre, les hanches au-dessus des épaules.",
  },
  {
    termeId: 'montee-pole',
    situation: "Tes mains et tes jambes s'agrippent à la barre en alternance. Tu te hisses progressivement vers le haut, centimètre par centimètre.",
  },
  {
    termeId: 'figure-statique',
    situation: "Tu te maintiens immobile dans une position sur la barre, soutenue uniquement par la force et l'équilibre de ton corps.",
  },
  // ── Burlesque ───────────────────────────────────────────────────────────────
  {
    termeId: 'shimmy',
    situation: "Les épaules ou les hanches vibrent très rapidement de façon répétée. Un frémissement intense, rythmé, presque mécanique.",
  },
  {
    termeId: 'bump-grind',
    situation: "La hanche part d'un coup sec sur le côté — puis tourne en cercle lent et continu. Deux mouvements enchaînés.",
  },
  {
    termeId: 'tease',
    situation: "Tu commences un geste — tu sembles révéler quelque chose — puis tu t'arrêtes net et tu regardes le public. Tu les fais attendre.",
  },
  {
    termeId: 'pose-burlesque',
    situation: "Tu t'immobilises dans une position construite — bras allongés, regard au public. Tout le corps est une image figée.",
  },
  {
    termeId: 'glove-peel',
    situation: "Tu retires lentement un gant long, doigt par doigt, sans jamais regarder ta main. Les yeux restent sur le public.",
  },
  {
    termeId: 'tassel-twirling',
    situation: "De petits ornements accrochés au corps se mettent à tournoyer dans des directions opposées, en rythme.",
  },
]

export function getSituationsDisponibles(): SituationScene[] {
  return situationsScene
}
