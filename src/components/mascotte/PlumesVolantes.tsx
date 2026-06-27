import { useReducedMotion } from 'framer-motion'

const FEATHERS = [
  { id: 1, left: 5,  size: 26, delay: 0,  dur: 22 },
  { id: 2, left: 21, size: 34, delay: 6,  dur: 27 },
  { id: 3, left: 38, size: 20, delay: 3,  dur: 18 },
  { id: 4, left: 54, size: 30, delay: 14, dur: 24 },
  { id: 5, left: 71, size: 22, delay: 5,  dur: 20 },
  { id: 6, left: 87, size: 36, delay: 19, dur: 29 },
  { id: 7, left: 13, size: 18, delay: 10, dur: 19 },
  { id: 8, left: 46, size: 28, delay: 21, dur: 23 },
]

function FeatherSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 3.5)}
      viewBox="0 0 24 84"
      fill="none"
      aria-hidden="true"
    >
      {/* Tige */}
      <path
        d="M12 82 Q9 58 12 32 Q13 16 12 4"
        stroke="#2dd4bf" strokeWidth="1.2" strokeLinecap="round"
      />
      {/* Barbules gauche */}
      <path d="M12 62 Q4 56 2 48"  stroke="#4ade80" strokeWidth="0.7" opacity="0.7" />
      <path d="M12 50 Q3 44 1 35"  stroke="#22d3ee" strokeWidth="0.7" opacity="0.7" />
      <path d="M12 38 Q4 31 3 22"  stroke="#4ade80" strokeWidth="0.7" opacity="0.6" />
      {/* Barbules droite */}
      <path d="M12 62 Q20 56 22 48" stroke="#4ade80" strokeWidth="0.7" opacity="0.7" />
      <path d="M12 50 Q21 44 23 35" stroke="#22d3ee" strokeWidth="0.7" opacity="0.7" />
      <path d="M12 38 Q20 31 21 22" stroke="#4ade80" strokeWidth="0.7" opacity="0.6" />
      {/* Ocelle externe */}
      <ellipse cx="12" cy="9" rx="7"   ry="8"   fill="#2dd4bf" opacity="0.35" />
      {/* Ocelle sombre */}
      <ellipse cx="12" cy="9" rx="4.5" ry="5.5" fill="#1e3a5f" opacity="0.5"  />
      {/* Reflet cyan */}
      <ellipse cx="12" cy="9" rx="2.5" ry="3"   fill="#67e8f9" opacity="0.6"  />
      {/* Éclat */}
      <ellipse cx="10.5" cy="7.5" rx="1" ry="1.5" fill="white" opacity="0.5" />
    </svg>
  )
}

export function PlumesVolantes() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <>
      <style>{`
        @keyframes plumy-monte {
          0%   { transform: translateY(110vh) rotate(-10deg); opacity: 0; }
          8%   { opacity: 0.12; }
          90%  { opacity: 0.09; }
          100% { transform: translateY(-15vh) rotate(8deg); opacity: 0; }
        }
        @keyframes plumy-tangue {
          0%, 100% { transform: translateX(0px); }
          35%      { transform: translateX(13px); }
          70%      { transform: translateX(-11px); }
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {FEATHERS.map(f => (
          <div
            key={f.id}
            style={{
              position: 'absolute',
              left: `${f.left}%`,
              bottom: 0,
              animation: `plumy-monte ${f.dur}s ${f.delay}s infinite linear`,
            }}
          >
            <div style={{
              animation: `plumy-tangue ${Math.round(f.dur * 0.65)}s ${f.delay}s infinite ease-in-out`,
            }}>
              <FeatherSVG size={f.size} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
