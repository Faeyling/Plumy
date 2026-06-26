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
  reussite: "Plumy déploie sa roue en célébration",
  echec: "Plumy te réconforte avec bienveillance",
  repos: "Plumy au repos, queue repliée",
  retour: "Plumy content de te revoir",
}

// Fan: 9 feathers. Pivot at (PX, PY), tips in fully-expanded position.
const PX = 48
const PY = 85
const PLUMES = [
  { tx: 66, ty: 41, stem: '#15803d', tip: '#166534' },
  { tx: 57, ty: 36, stem: '#16a34a', tip: '#15803d' },
  { tx: 46, ty: 33, stem: '#14b8a6', tip: '#0f766e' },
  { tx: 36, ty: 37, stem: '#16a34a', tip: '#15803d' },
  { tx: 27, ty: 42, stem: '#15803d', tip: '#166534' },
  { tx: 18, ty: 50, stem: '#16a34a', tip: '#15803d' },
  { tx: 12, ty: 59, stem: '#14b8a6', tip: '#0f766e' },
  { tx: 9,  ty: 69, stem: '#15803d', tip: '#166534' },
  { tx: 8,  ty: 79, stem: '#16a34a', tip: '#15803d' },
]

export function PluмyMascot({ etat = 'accueil', taille = 120, className }: Props) {
  const reduceMotion = useReducedMotion()

  const roueFactor =
    etat === 'reussite' ? 1 :
    etat === 'echec'    ? 0.22 :
    etat === 'repos'    ? 0.1  : 0.65

  const corpsRotation = etat === 'encouragement' ? -8 : etat === 'retour' ? 5 : 0

  return (
    <motion.svg
      width={taille}
      height={taille}
      viewBox="0 0 128 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={messageParEtat[etat]}
      role="img"
      className={className}
      animate={reduceMotion ? {} : { rotate: corpsRotation }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    >
      {(etat === 'accueil' || etat === 'retour') && (
        <circle cx="65" cy="70" r="62" fill="#fce7f3" />
      )}

      <PluмyFan factor={roueFactor} reduceMotion={!!reduceMotion} etat={etat} />
      <PluмyCorps />
      <PluмyTete etat={etat} reduceMotion={!!reduceMotion} />
    </motion.svg>
  )
}

function PluмyFan({
  factor,
  reduceMotion,
  etat,
}: {
  factor: number
  reduceMotion: boolean
  etat: PluмyEtat
}) {
  return (
    <g>
      {PLUMES.map((p, i) => {
        const tx = PX + (p.tx - PX) * factor
        const ty = PY + (p.ty - PY) * factor
        const showEye = factor > 0.28

        return (
          <motion.g
            key={i}
            animate={
              etat === 'reussite' && !reduceMotion
                ? { opacity: [0.82, 1, 0.82] }
                : { opacity: 1 }
            }
            transition={{
              duration: 1.4,
              repeat: etat === 'reussite' ? Infinity : 0,
              delay: i * 0.09,
            }}
          >
            {/* Feather stem — thick flat stroke */}
            <motion.line
              x1={PX} y1={PY} x2={tx} y2={ty}
              stroke={p.stem}
              strokeWidth="9"
              strokeLinecap="round"
              animate={reduceMotion ? {} : { x2: tx, y2: ty }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
            {/* Central rib highlight */}
            <motion.line
              x1={PX} y1={PY} x2={tx} y2={ty}
              stroke="#86efac"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity={0.4}
              animate={reduceMotion ? {} : { x2: tx, y2: ty }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
            {/* Eye spot: dark green halo */}
            <motion.circle
              cx={tx} cy={ty}
              r={showEye ? 7 : 0}
              fill={p.tip}
              animate={reduceMotion ? {} : { cx: tx, cy: ty, r: showEye ? 7 : 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
            {/* Eye spot: gold ring */}
            <motion.circle
              cx={tx} cy={ty}
              r={showEye ? 5 : 0}
              fill="#f59e0b"
              animate={reduceMotion ? {} : { cx: tx, cy: ty, r: showEye ? 5 : 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
            {/* Eye spot: cobalt blue center */}
            <motion.circle
              cx={tx} cy={ty}
              r={showEye ? 2.8 : 0}
              fill="#1d6eb0"
              animate={reduceMotion ? {} : { cx: tx, cy: ty, r: showEye ? 2.8 : 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
          </motion.g>
        )
      })}
    </g>
  )
}

function PluмyCorps() {
  return (
    <g>
      {/* Body — cobalt blue flat shape */}
      <ellipse cx="73" cy="95" rx="23" ry="27" fill="#1a6fb5" />
      {/* Belly — lighter blue highlight */}
      <ellipse cx="77" cy="100" rx="14" ry="19" fill="#4a9fd4" opacity="0.6" />
      {/* Belly center sheen */}
      <ellipse cx="79" cy="103" rx="8" ry="12" fill="#bae6fd" opacity="0.5" />
      {/* Legs — orange */}
      <line x1="67" y1="119" x2="64" y2="130" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="79" y1="120" x2="82" y2="130" strokeWidth="3.5" stroke="#f97316" strokeLinecap="round" />
      {/* Left toes */}
      <line x1="64" y1="130" x2="58" y2="132" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="130" x2="65" y2="133" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="130" x2="70" y2="132" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right toes */}
      <line x1="82" y1="130" x2="76" y2="132" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="130" x2="83" y2="133" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="130" x2="88" y2="132" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  )
}

function PluмyTete({
  etat,
  reduceMotion,
}: {
  etat: PluмyEtat
  reduceMotion: boolean
}) {
  const clignement = etat === 'accueil' || etat === 'retour'

  return (
    <g>
      {/* Neck */}
      <path
        d="M 75 70 Q 83 61 90 55 Q 94 51 97 49"
        stroke="#1a6fb5"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 75 70 Q 83 61 90 55 Q 94 51 97 49"
        stroke="#4a9fd4"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity={0.45}
      />

      {/* Head */}
      <circle cx="97" cy="49" r="14" fill="#1a6fb5" />
      <circle cx="93" cy="45" r="9" fill="#4a9fd4" opacity={0.35} />

      {/* Eye — white sclera + animated pupil */}
      <circle cx="104" cy="45" r="5.5" fill="white" />
      <motion.g
        animate={clignement && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
        transition={{
          duration: 0.18,
          repeat: Infinity,
          repeatDelay: 4,
          ease: 'easeInOut',
        }}
        style={{ originX: '104px', originY: '45px' }}
      >
        <circle cx="104" cy="45" r="3.5" fill="#1e1b4b" />
        <circle cx="105.5" cy="43.5" r="1.2" fill="white" />
      </motion.g>

      {/* Beak — orange triangle */}
      <path d="M 110 47 L 122 44 L 110 53 Z" fill="#f97316" />
      <line
        x1="110" y1="50"
        x2="122" y2="44"
        stroke="#ea580c"
        strokeWidth="1"
        opacity={0.4}
      />

      {/* Aigrette — 4 pom-poms on light stems */}
      <motion.g
        animate={etat === 'reussite' && !reduceMotion ? { rotate: [-5, 5, -5] } : {}}
        transition={{ duration: 0.55, repeat: Infinity }}
        style={{ originX: '97px', originY: '36px' }}
      >
        <line x1="91" y1="36" x2="86" y2="23" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
        <line x1="95" y1="35" x2="93" y2="21" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
        <line x1="99" y1="35" x2="100" y2="21" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
        <line x1="103" y1="37" x2="108" y2="25" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
        <circle cx="86" cy="21" r="3.5" fill="#f472b6" />
        <circle cx="93" cy="19" r="3.5" fill="#a78bfa" />
        <circle cx="100" cy="19" r="4"   fill="#34d399" />
        <circle cx="108" cy="23" r="3.5" fill="#fbbf24" />
      </motion.g>
    </g>
  )
}
