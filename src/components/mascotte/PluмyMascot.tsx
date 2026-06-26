import { motion, useReducedMotion } from 'framer-motion'

export type PluмyEtat =
  | 'accueil'
  | 'encouragement'
  | 'reussite'
  | 'echec'
  | 'repos'
  | 'retour'

interface Props {
  etat?: PluмyEtat
  taille?: number
  className?: string
}

const messageParEtat: Record<PluмyEtat, string> = {
  accueil: "Plumy te souhaite la bienvenue",
  encouragement: "Plumy t'encourage",
  reussite: "Plumy déploie sa couronne en célébration",
  echec: "Plumy te réconforte avec bienveillance",
  repos: "Plumy au repos",
  retour: "Plumy content de te revoir",
}

// Pivot de la couronne (sommet de la tête)
const CPX = 118
const CPY = 38

// Plumes de couronne : angle CCW depuis +x, longueur
const COURONNE = [
  { a: 115, len: 18 },
  { a: 100, len: 22 },
  { a: 84,  len: 25 },
  { a: 68,  len: 25 },
  { a: 52,  len: 22 },
  { a: 36,  len: 18 },
  { a: 20,  len: 14 },
]

export function PluмyMascot({ etat = 'accueil', taille = 120, className }: Props) {
  const reduceMotion = useReducedMotion()

  const droopHead = etat === 'echec'
  const tucked    = etat === 'repos'

  return (
    <motion.svg
      width={taille}
      height={Math.round(taille * 215 / 190)}
      viewBox="0 0 190 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={messageParEtat[etat]}
      role="img"
      className={className}
      animate={reduceMotion ? {} : { y: tucked ? 0 : [0, -3, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      {(etat === 'accueil' || etat === 'retour') && (
        <ellipse cx="95" cy="130" rx="88" ry="82" fill="#fce7f3" opacity="0.45" />
      )}

      <Corps etat={etat} />
      <CouTete etat={etat} droopHead={droopHead} tucked={tucked} reduceMotion={!!reduceMotion} />
    </motion.svg>
  )
}

function Corps({ etat }: { etat: PluмyEtat }) {
  return (
    <g>
      {/* Plumes de queue – légèrement tombantes vers l'arrière */}
      <ellipse cx="52" cy="122" rx="18" ry="9" fill="#475569" opacity={0.7} transform="rotate(18, 52, 122)" />
      <ellipse cx="49" cy="126" rx="14" ry="7" fill="#64748b" opacity={0.55} transform="rotate(24, 49, 126)" />
      <ellipse cx="46" cy="130" rx="11" ry="5" fill="#94a3b8" opacity={0.45} transform="rotate(30, 46, 130)" />

      {/* Corps principal – gris-bleu ardoise */}
      <ellipse cx="88" cy="122" rx="34" ry="22" fill="#64748b" />
      {/* Ventre – blanc cassé */}
      <ellipse cx="94" cy="128" rx="24" ry="15" fill="#f1f5f9" opacity={0.85} />
      {/* Aile – surface principale gris chaud */}
      <ellipse cx="82" cy="116" rx="28" ry="16" fill="#78909c" opacity={0.9} transform="rotate(-8, 82, 116)" />
      {/* Lisière de l'aile – rémiges sombres */}
      <ellipse cx="68" cy="128" rx="20" ry="6" fill="#334155" opacity={0.75} transform="rotate(-15, 68, 128)" />
      {/* Reflet dorsal */}
      <ellipse cx="82" cy="110" rx="16" ry="8" fill="#b0bec5" opacity={0.4} transform="rotate(-8, 82, 110)" />

      {/* Jambe avant */}
      <line x1="93" y1="142" x2="93" y2="188" stroke="#78716c" strokeWidth="4.5" strokeLinecap="round" />
      {/* Genou avant (articulation) */}
      <circle cx="93" cy="165" r="3.5" fill="#a8a29e" />
      {/* Jambe arrière */}
      <line x1="78" y1="143" x2="78" y2="187" stroke="#78716c" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="78" cy="163" r="3.5" fill="#a8a29e" />

      {/* Pieds avant – 3 doigts */}
      <line x1="93" y1="188" x2="80" y2="194" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <line x1="93" y1="188" x2="93" y2="196" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <line x1="93" y1="188" x2="105" y2="193" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      {/* Pouce arrière */}
      <line x1="93" y1="188" x2="100" y2="197" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />

      {/* Pieds arrière */}
      <line x1="78" y1="187" x2="65" y2="193" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="187" x2="78" y2="195" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="187" x2="90" y2="192" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="187" x2="84" y2="196" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />

      {/* Aile levée en réussite */}
      {etat === 'reussite' && (
        <motion.ellipse
          cx="82" cy="100" rx="28" ry="12"
          fill="#90a4ae" opacity={0.7}
          transform="rotate(-30, 82, 100)"
          initial={{ rotate: -8, opacity: 0 }}
          animate={{ rotate: [-30, -25, -30], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </g>
  )
}

function CouTete({
  etat,
  droopHead,
  tucked,
  reduceMotion,
}: {
  etat: PluмyEtat
  droopHead: boolean
  tucked: boolean
  reduceMotion: boolean
}) {
  const clignement = etat === 'accueil' || etat === 'retour'

  return (
    <motion.g
      animate={reduceMotion ? {} : { rotate: droopHead ? 18 : tucked ? -8 : 0 }}
      style={{ transformOrigin: '108px 105px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 14 }}
    >
      {/* Cou – silhouette blanche, fine et longue */}
      <path
        d="M 108 108 Q 112 90 116 72 Q 119 58 122 50"
        stroke="#e2e8f0"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cou – reflet central blanc pur */}
      <path
        d="M 108 108 Q 112 90 116 72 Q 119 58 122 50"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity={0.55}
      />

      {/* Tête – cercle bleu ardoise */}
      <circle cx="122" cy="45" r="16" fill="#546e7a" />

      {/* Tache rouge caractéristique (grue couronnée) */}
      <ellipse cx="115" cy="40" rx="10" ry="8" fill="#ef4444" opacity={0.88} />

      {/* Joue blanche */}
      <ellipse cx="126" cy="50" rx="9" ry="8" fill="#f1f5f9" opacity={0.92} />

      {/* Masque facial sombre */}
      <ellipse cx="134" cy="44" rx="10" ry="9" fill="#1e293b" />

      {/* Œil – sclère blanc */}
      <circle cx="136" cy="41" r="5" fill="white" />
      <motion.g
        animate={clignement && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
        transition={{ duration: 0.16, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        style={{ originX: '136px', originY: '41px' }}
      >
        <circle cx="136" cy="41" r="3.2" fill="#1a1a3e" />
        <circle cx="137.2" cy="39.8" r="1.1" fill="white" />
      </motion.g>

      {/* Bec – gris foncé pointu */}
      <path d="M 143 43 L 168 41 L 143 48 Z" fill="#475569" />
      <line x1="143" y1="45" x2="167" y2="42" stroke="#334155" strokeWidth="0.8" opacity={0.5} />

      {/* Couronne de plumes dorées */}
      <motion.g
        animate={etat === 'reussite' && !reduceMotion ? { rotate: [-8, 8, -8] } : {}}
        transition={{ duration: 0.55, repeat: Infinity }}
        style={{ originX: `${CPX}px`, originY: `${CPY}px` }}
      >
        {COURONNE.map(({ a, len }, i) => {
          const rad = (a * Math.PI) / 180
          const tx = CPX + len * Math.cos(rad)
          const ty = CPY - len * Math.sin(rad)
          return (
            <g key={i}>
              <line
                x1={CPX} y1={CPY}
                x2={tx} y2={ty}
                stroke="#fbbf24"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Pompon doré au bout */}
              <circle cx={tx} cy={ty} r={3} fill="#fbbf24" />
              {/* Cœur du pompon – couleur candy alternée */}
              <circle
                cx={tx} cy={ty} r={1.6}
                fill={['#f472b6', '#a78bfa', '#34d399', '#fbbf24', '#f472b6', '#a78bfa', '#34d399'][i % 7]}
              />
            </g>
          )
        })}
      </motion.g>
    </motion.g>
  )
}
