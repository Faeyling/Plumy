import { useReducedMotion } from 'framer-motion'

const FEATHERS = [
  { id: 1, left: 5,  size: 28, delay: 0,  dur: 14 },
  { id: 2, left: 22, size: 36, delay: 5,  dur: 17 },
  { id: 3, left: 40, size: 22, delay: 2,  dur: 12 },
  { id: 4, left: 57, size: 32, delay: 9,  dur: 16 },
  { id: 5, left: 73, size: 24, delay: 4,  dur: 13 },
  { id: 6, left: 88, size: 38, delay: 12, dur: 18 },
  { id: 7, left: 14, size: 20, delay: 7,  dur: 15 },
  { id: 8, left: 48, size: 30, delay: 14, dur: 11 },
]

function FeatherSVG({ size }: { size: number }) {
  const h = Math.round(size * 3.2)
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 24 76"
      fill="none"
      aria-hidden="true"
      style={{ transform: 'rotate(30deg)' }}
    >
      {/* Tige courbe */}
      <path
        d="M12 74 Q8 52 12 28 Q14 14 12 2"
        stroke="#2dd4bf" strokeWidth="1.4" strokeLinecap="round"
      />
      {/* Barbes gauche */}
      <path d="M12 58 Q3 50 1 40"  stroke="#4ade80" strokeWidth="1"   opacity="0.65" strokeLinecap="round" />
      <path d="M12 44 Q2 37 0 27"  stroke="#22d3ee" strokeWidth="0.9" opacity="0.6"  strokeLinecap="round" />
      <path d="M12 32 Q3 26 2 17"  stroke="#4ade80" strokeWidth="0.8" opacity="0.5"  strokeLinecap="round" />
      {/* Barbes droite */}
      <path d="M12 58 Q21 50 23 40" stroke="#4ade80" strokeWidth="1"   opacity="0.65" strokeLinecap="round" />
      <path d="M12 44 Q22 37 24 27" stroke="#22d3ee" strokeWidth="0.9" opacity="0.6"  strokeLinecap="round" />
      <path d="M12 32 Q21 26 22 17" stroke="#4ade80" strokeWidth="0.8" opacity="0.5"  strokeLinecap="round" />
      {/* Ocelle — couronne externe */}
      <ellipse cx="12" cy="8" rx="7.5" ry="8.5" fill="#2dd4bf" opacity="0.3"  />
      {/* Ocelle sombre */}
      <ellipse cx="12" cy="8" rx="5"   ry="6"   fill="#1e3a5f" opacity="0.45" />
      {/* Reflet cyan */}
      <ellipse cx="12" cy="8" rx="2.8" ry="3.3" fill="#67e8f9" opacity="0.55" />
      {/* Éclat */}
      <ellipse cx="10.5" cy="6.5" rx="1.1" ry="1.5" fill="white" opacity="0.55" />
    </svg>
  )
}

export function PlumesVolantes() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <>
      <style>{`
        @keyframes plumy-tombe {
          0%   { transform: translateY(-12vh) rotate(0deg);   opacity: 0; }
          6%   { opacity: 0.13; }
          88%  { opacity: 0.10; }
          100% { transform: translateY(108vh) rotate(25deg);  opacity: 0; }
        }
        @keyframes plumy-derive {
          0%, 100% { transform: translateX(0px);   }
          25%      { transform: translateX(18px);  }
          60%      { transform: translateX(-14px); }
          85%      { transform: translateX(8px);   }
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
              top: 0,
              animation: `plumy-tombe ${f.dur}s ${f.delay}s infinite ease-in`,
            }}
          >
            <div style={{
              animation: `plumy-derive ${Math.round(f.dur * 0.8)}s ${f.delay}s infinite ease-in-out`,
            }}>
              <FeatherSVG size={f.size} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
