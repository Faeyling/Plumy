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

// Pivot de la queue (base des plumes)
const FX = 98
const FY = 142

// Plumes : angle depuis +x (trigonométrique CCW), longueur à factor=1
const FEATHERS = [
  { a: 68,  len: 72 },
  { a: 82,  len: 76 },
  { a: 96,  len: 78 },
  { a: 110, len: 78 },
  { a: 124, len: 78 },
  { a: 138, len: 78 },
  { a: 152, len: 76 },
  { a: 165, len: 75 },
  { a: 178, len: 75 },
  { a: 191, len: 73 },
  { a: 202, len: 71 },
  { a: 210, len: 68 },
  { a: 218, len: 65 },
]

export function PluмyMascot({ etat = 'accueil', taille = 120, className }: Props) {
  const reduceMotion = useReducedMotion()

  const roueFactor =
    etat === 'reussite' ? 1 :
    etat === 'echec'    ? 0.35 :
    etat === 'repos'    ? 0.15  : 0.85

  return (
    <motion.svg
      width={taille}
      height={Math.round(taille * 200 / 210)}
      viewBox="0 0 210 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={messageParEtat[etat]}
      role="img"
      className={className}
      animate={reduceMotion ? {} : { y: etat === 'repos' ? 0 : [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {(etat === 'accueil' || etat === 'retour') && (
        <circle cx="112" cy="108" r="88" fill="#fce7f3" opacity="0.5" />
      )}

      <Fan factor={roueFactor} reduceMotion={!!reduceMotion} etat={etat} />
      {/* Croupion : zone verte entre queue et corps */}
      <ellipse cx="118" cy="142" rx="20" ry="18" fill="#1f7a3c" opacity={0.88} />
      <Corps />
      <CouTete etat={etat} reduceMotion={!!reduceMotion} />
    </motion.svg>
  )
}

function Fan({ factor, reduceMotion, etat }: { factor: number; reduceMotion: boolean; etat: PluмyEtat }) {
  return (
    <g>
      {FEATHERS.map(({ a, len }, i) => {
        const rad = (a * Math.PI) / 180
        const fl = len * factor
        const tx = FX + fl * Math.cos(rad)
        const ty = FY - fl * Math.sin(rad)
        const mx = FX + fl * 0.58 * Math.cos(rad)
        const my = FY - fl * 0.58 * Math.sin(rad)
        const R = 90 - a  // rotation pour aligner l'ellipse sur la plume
        const showEye = factor > 0.25

        return (
          <motion.g
            key={i}
            animate={
              etat === 'reussite' && !reduceMotion
                ? { opacity: [0.82, 1, 0.82] }
                : { opacity: 1 }
            }
            transition={{ duration: 1.4, repeat: etat === 'reussite' ? Infinity : 0, delay: i * 0.08 }}
          >
            {/* Tige centrale */}
            <line
              x1={FX} y1={FY} x2={tx} y2={ty}
              stroke="#1a5c35" strokeWidth="1" strokeLinecap="round" opacity={0.55}
            />
            {/* Limbe de la plume – vert foncé */}
            <ellipse
              cx={mx} cy={my} rx={7} ry={23}
              fill="#236e40"
              transform={`rotate(${R}, ${mx}, ${my})`}
            />
            {/* Reflet central – vert clair */}
            <ellipse
              cx={mx} cy={my} rx={3} ry={14}
              fill="#4ade80" opacity={0.42}
              transform={`rotate(${R}, ${mx}, ${my})`}
            />
            {/* Nervure blanche */}
            <line
              x1={FX} y1={FY} x2={tx} y2={ty}
              stroke="#d1fae5" strokeWidth="0.6" strokeLinecap="round" opacity={0.35}
            />
            {/* Ocelle – halo vert foncé */}
            {showEye && (
              <ellipse cx={tx} cy={ty} rx={7} ry={9}
                fill="#1a5c35" transform={`rotate(${R}, ${tx}, ${ty})`} />
            )}
            {/* Ocelle – anneau doré */}
            {showEye && (
              <ellipse cx={tx} cy={ty} rx={5} ry={6.5}
                fill="#f0a500" transform={`rotate(${R}, ${tx}, ${ty})`} />
            )}
            {/* Ocelle – bleu cobalt */}
            {showEye && (
              <ellipse cx={tx} cy={ty} rx={3} ry={4}
                fill="#1565c0" transform={`rotate(${R}, ${tx}, ${ty})`} />
            )}
            {/* Ocelle – centre sombre */}
            {showEye && (
              <ellipse cx={tx} cy={ty} rx={1.5} ry={2}
                fill="#0d1b4e" transform={`rotate(${R}, ${tx}, ${ty})`} />
            )}
          </motion.g>
        )
      })}
    </g>
  )
}

function Corps() {
  return (
    <g>
      {/* Corps principal – bleu cobalt */}
      <ellipse cx="147" cy="136" rx="30" ry="37" fill="#1565c0" />
      {/* Reflet bleu moyen */}
      <ellipse cx="153" cy="127" rx="20" ry="26" fill="#1e88e5" opacity={0.48} />
      {/* Aile – bleu ciel */}
      <ellipse
        cx="147" cy="149" rx="22" ry="13"
        fill="#29b6f6" opacity={0.78}
        transform="rotate(-14, 147, 149)"
      />
      {/* Reflet aile */}
      <ellipse
        cx="144" cy="146" rx="13" ry="7"
        fill="#80d8ff" opacity={0.48}
        transform="rotate(-14, 144, 146)"
      />
      {/* Jambe gauche */}
      <line x1="138" y1="170" x2="133" y2="192" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      {/* Jambe droite */}
      <line x1="156" y1="171" x2="161" y2="192" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      {/* Doigts gauche */}
      <line x1="133" y1="192" x2="122" y2="195" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="133" y1="192" x2="131" y2="197" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="133" y1="192" x2="141" y2="196" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
      {/* Doigts droite */}
      <line x1="161" y1="192" x2="150" y2="196" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="161" y1="192" x2="161" y2="198" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="161" y1="192" x2="169" y2="196" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  )
}

function CouTete({ etat, reduceMotion }: { etat: PluмyEtat; reduceMotion: boolean }) {
  const clignement = etat === 'accueil' || etat === 'retour'
  const droopHead = etat === 'echec'

  return (
    <motion.g
      animate={reduceMotion ? {} : { rotate: droopHead ? 14 : 0 }}
      style={{ transformOrigin: '147px 100px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 12 }}
    >
      {/* Cou – épaisse silhouette bleu foncé */}
      <path
        d="M 147 100 Q 156 83 164 69 Q 168 61 171 54"
        stroke="#1565c0" strokeWidth="16" strokeLinecap="round" fill="none"
      />
      {/* Cou – reflet bleu moyen */}
      <path
        d="M 147 100 Q 156 83 164 69 Q 168 61 171 54"
        stroke="#1e88e5" strokeWidth="7" strokeLinecap="round" fill="none" opacity={0.44}
      />

      {/* Tête */}
      <circle cx="173" cy="46" r="22" fill="#1565c0" />
      <circle cx="169" cy="42" r="13" fill="#1e88e5" opacity={0.34} />

      {/* Masque facial – bleu marine */}
      <ellipse cx="183" cy="50" rx="13" ry="11" fill="#0a1e5c" />

      {/* Joue blanche */}
      <ellipse cx="178" cy="55" rx="7" ry="6" fill="#e8f4fd" opacity={0.88} />

      {/* Œil – sclère */}
      <circle cx="185" cy="43" r="5.5" fill="white" />
      {/* Pupille avec clignement */}
      <motion.g
        animate={clignement && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
        transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 4.5, ease: 'easeInOut' }}
        style={{ originX: '185px', originY: '43px' }}
      >
        <circle cx="185" cy="43" r="3.5" fill="#1a1a3e" />
        <circle cx="186.5" cy="41.5" r="1.2" fill="white" />
      </motion.g>

      {/* Bec – triangle jaune doré */}
      <path d="M 193 47 L 208 44 L 193 56 Z" fill="#f59e0b" />
      <line x1="193" y1="51" x2="207" y2="45" stroke="#d97706" strokeWidth="1" opacity={0.38} />

      {/* Tiges de l'aigrette */}
      <line x1="170" y1="25" x2="162" y2="5"  stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
      <line x1="173" y1="24" x2="170" y2="3"  stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
      <line x1="176" y1="24" x2="179" y2="4"  stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
      <line x1="179" y1="25" x2="187" y2="8"  stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
      <line x1="182" y1="27" x2="192" y2="15" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />

      {/* Pompons candy */}
      <motion.g
        animate={etat === 'reussite' && !reduceMotion ? { rotate: [-6, 6, -6] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ originX: '176px', originY: '24px' }}
      >
        <circle cx="161" cy="4"  r="4"   fill="#f472b6" />
        <circle cx="170" cy="2"  r="4.5" fill="#a78bfa" />
        <circle cx="179" cy="3"  r="4.5" fill="#34d399" />
        <circle cx="188" cy="7"  r="4"   fill="#fbbf24" />
        <circle cx="193" cy="14" r="3.5" fill="#f472b6" />
      </motion.g>
    </motion.g>
  )
}
