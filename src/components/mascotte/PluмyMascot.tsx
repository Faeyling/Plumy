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
  reussite: "Plumy déploie sa crête en célébration",
  echec: "Plumy te réconforte avec bienveillance",
  repos: "Plumy au repos, crête repliée",
  retour: "Plumy content de te revoir",
}

const PNG_ETATS: Partial<Record<PluмyEtat, string>> = {
  accueil: '/mascotte/plumy-accueil.png',
  encouragement: '/mascotte/plumy-encouragement.png',
  echec: '/mascotte/plumy-echec.png',
  repos: '/mascotte/plumy-repos.png',
}

// Pivot de la crête (sommet de la tête)
const CPX = 66
const CPY = 45

// Angles ouverts par plume (CCW depuis +x), fermés tous à 172°
const CREST_OPEN  = [68, 80, 92, 104, 116, 128, 140]
const CREST_CLOSE = 172
const CREST_LEN   = [30, 34, 37, 38, 36, 32, 27]

export function PluмyMascot({ etat = 'accueil', taille = 120, className }: Props) {
  const reduceMotion = useReducedMotion()
  const pngSrc = PNG_ETATS[etat]

  if (pngSrc) {
    return (
      <motion.img
        src={pngSrc}
        alt={messageParEtat[etat]}
        width={taille}
        height={taille}
        className={className}
        style={{ objectFit: 'contain' }}
        animate={reduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  const crestFactor =
    etat === 'reussite'      ? 1.0 :
    etat === 'retour'        ? 0.70 :
    etat === 'echec'         ? 0.28 : 0.04

  return (
    <motion.svg
      width={taille}
      height={Math.round(taille * 162 / 140)}
      viewBox="0 0 140 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={messageParEtat[etat]}
      role="img"
      className={className}
      animate={reduceMotion ? {} : { y: etat === 'repos' ? 0 : [0, -2, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <clipPath id="plumy-wing">
          <ellipse cx="32" cy="93" rx="27" ry="19" transform="rotate(-8, 32, 93)" />
        </clipPath>
      </defs>

      {etat === 'retour' && (
        <ellipse cx="62" cy="100" rx="70" ry="60" fill="#fce7f3" opacity="0.45" />
      )}

      <Corps />
      <CouTete etat={etat} crestFactor={crestFactor} reduceMotion={!!reduceMotion} />
    </motion.svg>
  )
}

function Corps() {
  return (
    <g>
      {/* Queue – quelques rectrices sombres */}
      <ellipse cx="13" cy="100" rx="13" ry="7" fill="#1e293b" opacity={0.7} transform="rotate(10, 13, 100)" />
      <ellipse cx="15" cy="107" rx="9"  ry="5" fill="#334155" opacity={0.5} transform="rotate(16, 15, 107)" />

      {/* Corps principal – ventre + poitrine cannelle-buff */}
      <ellipse cx="42" cy="98" rx="30" ry="22" fill="#fb923c" />
      {/* Poitrine – reflet plus chaud */}
      <ellipse cx="52" cy="103" rx="18" ry="15" fill="#fdba74" opacity={0.65} />

      {/* Aile – plaque sombre avec barres blanches caractéristiques */}
      <ellipse cx="32" cy="93" rx="27" ry="19" fill="#1e293b" transform="rotate(-8, 32, 93)" />
      <g clipPath="url(#plumy-wing)">
        {[79, 87, 95, 103, 111].map((y, i) => (
          <rect key={i} x="4" y={y} width="58" height="4.5" fill="#f8fafc" opacity={0.85} />
        ))}
      </g>
      {/* Liseré supérieur de l'aile */}
      <path d="M 7 78 Q 32 72 57 80" stroke="#475569" strokeWidth="1.5" fill="none" opacity={0.5} />

      {/* Pattes courtes, gris-brun */}
      <line x1="50" y1="118" x2="50" y2="148" stroke="#78716c" strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="120" x2="38" y2="148" stroke="#78716c" strokeWidth="4" strokeLinecap="round" />
      {/* Pieds avant */}
      <line x1="50" y1="148" x2="39" y2="152" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="148" x2="50" y2="156" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="148" x2="60" y2="152" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pieds arrière */}
      <line x1="38" y1="148" x2="27" y2="153" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="148" x2="38" y2="157" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="148" x2="48" y2="153" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  )
}

function CouTete({
  etat,
  crestFactor,
  reduceMotion,
}: {
  etat: PluмyEtat
  crestFactor: number
  reduceMotion: boolean
}) {
  const clignement = etat === 'retour'

  return (
    <motion.g
      animate={reduceMotion ? {} : { rotate: etat === 'echec' ? 14 : 0 }}
      style={{ transformOrigin: '56px 78px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 14 }}
    >
      {/* Crête – éventail de plumes à pointes noires */}
      <motion.g
        animate={etat === 'reussite' && !reduceMotion ? { rotate: [-6, 6, -6] } : {}}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{ transformOrigin: `${CPX}px ${CPY}px` }}
      >
        {CREST_OPEN.map((openAngle, i) => {
          const angle = CREST_CLOSE + crestFactor * (openAngle - CREST_CLOSE)
          const rad   = (angle * Math.PI) / 180
          const len   = CREST_LEN[i]
          const tx    = CPX + len * Math.cos(rad)
          const ty    = CPY - len * Math.sin(rad)
          const wx    = CPX + (len - 5) * Math.cos(rad)
          const wy    = CPY - (len - 5) * Math.sin(rad)

          return (
            <g key={i}>
              <line
                x1={CPX} y1={CPY} x2={tx} y2={ty}
                stroke="#f97316" strokeWidth="2.2" strokeLinecap="round"
              />
              <circle cx={wx} cy={wy} r={2} fill="white" opacity={0.88} />
              <circle cx={tx} cy={ty} r={2.5} fill="#1e293b" />
            </g>
          )
        })}
      </motion.g>

      {/* Tête – orange-cannelle chaud */}
      <circle cx="70" cy="58" r="17" fill="#fb923c" />
      <circle cx="65" cy="53" r="10" fill="#fdba74" opacity={0.4} />

      {/* Bec – long, fin, légèrement courbé vers le bas */}
      <path
        d="M 86 60 Q 106 65 126 73"
        stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M 86 63 Q 106 68 126 75"
        stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" opacity={0.45}
      />

      {/* Anneau oculaire clair */}
      <circle cx="81" cy="53" r="6.5" fill="none" stroke="#fed7aa" strokeWidth="1" opacity={0.6} />
      {/* Œil */}
      <circle cx="81" cy="53" r="5" fill="#1a1a3e" />
      <motion.g
        animate={clignement && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
        transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 4.5, ease: 'easeInOut' }}
        style={{ originX: '81px', originY: '53px' }}
      >
        <circle cx="81" cy="53" r="3.2" fill="#1a1a3e" />
        <circle cx="82.2" cy="51.8" r="1.1" fill="white" />
      </motion.g>
    </motion.g>
  )
}
