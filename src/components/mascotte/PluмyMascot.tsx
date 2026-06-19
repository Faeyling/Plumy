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

export function PluмyMascot({ etat = 'accueil', taille = 120, className }: Props) {
  const reduceMotion = useReducedMotion()

  const roueFactor = etat === 'reussite' ? 1 : etat === 'echec' ? 0.2 : etat === 'repos' ? 0.1 : 0.6
  const corpsRotation = etat === 'encouragement' ? -8 : etat === 'retour' ? 5 : 0

  return (
    <motion.svg
      width={taille}
      height={taille}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={messageParEtat[etat]}
      role="img"
      className={className}
      animate={reduceMotion ? {} : { rotate: corpsRotation }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    >
      {/* Fond rose (logo/accueil uniquement) */}
      {(etat === 'accueil' || etat === 'retour') && (
        <circle cx="60" cy="60" r="58" fill="#fce7f3" />
      )}

      {/* Queue / roue déployée */}
      <PluмyQueue factor={roueFactor} reduceMotion={reduceMotion ?? false} etat={etat} />

      {/* Corps */}
      <PluмyCorps />

      {/* Tête et huppe */}
      <PluмyTete etat={etat} reduceMotion={reduceMotion ?? false} />
    </motion.svg>
  )
}

function PluмyQueue({ factor, reduceMotion, etat }: { factor: number; reduceMotion: boolean; etat: PluмyEtat }) {
  const plumes = [
    { angle: -70, color: '#0ea5e9', ocelle: '#7c3aed' },
    { angle: -50, color: '#14b8a6', ocelle: '#0ea5e9' },
    { angle: -30, color: '#38bdf8', ocelle: '#34d399' },
    { angle: -10, color: '#0ea5e9', ocelle: '#a78bfa' },
    { angle: 10, color: '#22d3ee', ocelle: '#0ea5e9' },
    { angle: 30, color: '#14b8a6', ocelle: '#38bdf8' },
    { angle: 50, color: '#0284c7', ocelle: '#7c3aed' },
  ]

  return (
    <g transform="translate(38, 68)">
      {plumes.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180
        const longueur = 38 * factor
        const x2 = Math.sin(rad) * longueur
        const y2 = -Math.cos(rad) * longueur

        return (
          <motion.g
            key={i}
            animate={reduceMotion ? {} : {
              opacity: factor > 0.5 && etat === 'reussite' ? [0.8, 1, 0.8] : 1,
            }}
            transition={{ duration: 1.2, repeat: etat === 'reussite' ? Infinity : 0, delay: i * 0.1 }}
          >
            <motion.line
              x1="0" y1="0"
              x2={x2} y2={y2}
              stroke={p.color}
              strokeWidth="3"
              strokeLinecap="round"
              animate={reduceMotion ? {} : { x2, y2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            />
            {factor > 0.4 && (
              <motion.ellipse
                cx={x2} cy={y2}
                rx={4 * factor} ry={5.5 * factor}
                fill={p.color}
                opacity={0.85}
                animate={reduceMotion ? {} : { cx: x2, cy: y2, rx: 4 * factor, ry: 5.5 * factor }}
                transition={{ type: 'spring', stiffness: 80, damping: 10 }}
              />
            )}
            {factor > 0.5 && (
              <motion.ellipse
                cx={x2} cy={y2}
                rx={2 * factor} ry={2.5 * factor}
                fill={p.ocelle}
                opacity={0.9}
                animate={reduceMotion ? {} : { cx: x2, cy: y2 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10 }}
              />
            )}
          </motion.g>
        )
      })}
    </g>
  )
}

function PluмyCorps() {
  return (
    <g>
      {/* Corps principal */}
      <ellipse cx="52" cy="72" rx="18" ry="22" fill="#0ea5e9" />
      <ellipse cx="52" cy="72" rx="14" ry="17" fill="#38bdf8" opacity="0.5" />
      {/* Ventre plus clair */}
      <ellipse cx="54" cy="76" rx="9" ry="13" fill="#7dd3fc" opacity="0.7" />
      {/* Patte */}
      <line x1="48" y1="90" x2="45" y2="100" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="56" y1="91" x2="58" y2="100" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="45" y1="100" x2="41" y2="103" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
      <line x1="45" y1="100" x2="46" y2="104" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="100" x2="54" y2="104" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="100" x2="61" y2="103" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

function PluмyTete({ etat, reduceMotion }: { etat: PluмyEtat; reduceMotion: boolean }) {
  const clignement = etat === 'accueil' || etat === 'retour'

  return (
    <g>
      {/* Cou */}
      <path d="M 50 55 Q 58 50 64 45 Q 68 42 70 40" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M 50 55 Q 58 50 64 45 Q 68 42 70 40" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Tête */}
      <circle cx="72" cy="37" r="11" fill="#0ea5e9" />
      <circle cx="72" cy="37" r="8" fill="#38bdf8" opacity="0.4" />

      {/* Oeil */}
      <motion.g
        animate={clignement && !reduceMotion ? { scaleY: [1, 0.1, 1] } : {}}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
        style={{ originX: '79px', originY: '34px' }}
      >
        <circle cx="79" cy="34" r="4" fill="#1e1b4b" />
        <circle cx="80.5" cy="32.5" r="1.2" fill="white" />
      </motion.g>

      {/* Bec */}
      <path d="M 83 37 L 90 36 L 83 39 Z" fill="#fbbf24" />

      {/* Huppe */}
      <motion.g
        animate={etat === 'reussite' && !reduceMotion ? { rotate: [-5, 5, -5] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ originX: '72px', originY: '26px' }}
      >
        <line x1="68" y1="27" x2="65" y2="18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="26" x2="72" y2="16" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="76" y1="27" x2="79" y2="18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="65" cy="17" r="2.5" fill="#f472b6" />
        <circle cx="72" cy="15" r="3" fill="#a78bfa" />
        <circle cx="79" cy="17" r="2.5" fill="#34d399" />
      </motion.g>
    </g>
  )
}
