import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { noeuds, liens, NW, NH, type Noeud } from '@/content/graphe-danses'

const CANVAS_W = 1040
const CANVAS_H = 800

const NODE_COLORS: Record<string, { fill: string; stroke: string }> = {
  origine:    { fill: '#f3e8ff', stroke: '#9333ea' },
  discipline: { fill: '#dbeafe', stroke: '#2563eb' },
  'sous-style':{ fill: '#d1fae5', stroke: '#059669' },
  mouvement:  { fill: '#fef9c3', stroke: '#d97706' },
}

const HERITAGE_COLORS: Record<string, string> = {
  'afro-americain':        '#f97316',
  'noir-lgbtq':            '#a855f7',
  'travailleuses-du-sexe': '#ec4899',
}

const HEELS_COLORS = { fill: '#fce7f3', stroke: '#ec4899' }

function getNodeColors(n: Noeud) {
  if (n.id === 'heels') return HEELS_COLORS
  return NODE_COLORS[n.type] ?? NODE_COLORS.discipline
}

function bezierPath(src: Noeud, dst: Noeud) {
  const x1 = src.x + NW
  const y1 = src.y + NH / 2
  const x2 = dst.x
  const y2 = dst.y + NH / 2
  const dx = (x2 - x1) * 0.45
  return `M ${x1} ${y1} C ${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`
}

export function GrapheDansesPage() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState<string | null>(null)
  const noeudMap = Object.fromEntries(noeuds.map(n => [n.id, n]))

  const hoveredNode = hovered ? noeudMap[hovered] : null

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-5 bg-gradient-to-b from-[var(--color-candy-lavande-light)] to-[var(--color-plumy-bg)]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm mb-4"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </button>
        <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] leading-tight">
          Origines et interactions des danses
        </h1>
        <p className="text-sm text-[var(--color-gris-texte)] mt-1">
          Lecture de gauche (origines) à droite (aujourd'hui). Survole un nœud pour en savoir plus.
        </p>
      </header>

      {/* Légende */}
      <div className="px-5 py-3 flex flex-wrap gap-3 bg-white border-b border-[var(--color-gris-doux)] text-xs">
        {Object.entries(NODE_COLORS).map(([type, c]) => (
          <span key={type} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border" style={{ backgroundColor: c.fill, borderColor: c.stroke }} />
            <span className="text-[var(--color-gris-texte)] capitalize">{type.replace('-', ' ')}</span>
          </span>
        ))}
        <span className="flex items-center gap-1.5 ml-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f97316' }} />
          <span className="text-[var(--color-gris-texte)]">Héritage afro-américain</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a855f7' }} />
          <span className="text-[var(--color-gris-texte)]">Communautés noires & LGBTQ+</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ec4899' }} />
          <span className="text-[var(--color-gris-texte)]">Travailleuses du sexe</span>
        </span>
      </div>

      {/* Tooltip fixe */}
      <div
        aria-live="polite"
        className={`px-5 py-3 bg-[var(--color-candy-lavande-light)] border-b border-[var(--color-candy-lavande)] text-sm text-[var(--color-encre)] min-h-[56px] transition-opacity ${hoveredNode ? 'opacity-100' : 'opacity-40'}`}
      >
        {hoveredNode ? (
          <>
            <span className="font-[var(--font-titre)] font-bold">{hoveredNode.label}{hoveredNode.labelBis ? ' ' + hoveredNode.labelBis : ''}</span>
            {hoveredNode.periode && <span className="text-[var(--color-gris-texte)] ml-2">· {hoveredNode.periode}</span>}
            {hoveredNode.note && <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">{hoveredNode.note}</p>}
          </>
        ) : (
          <span className="text-[var(--color-gris-texte)]">Survole un nœud pour voir ses informations.</span>
        )}
      </div>

      {/* Graphe SVG */}
      <div className="flex-1 overflow-x-auto overflow-y-auto bg-white">
        <svg
          role="img"
          aria-label="Schéma interactif des origines et interactions des disciplines de danse : de gauche à droite, des origines aux disciplines contemporaines."
          aria-describedby="graphe-description"
          width={CANVAS_W}
          height={CANVAS_H}
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          style={{ minWidth: CANVAS_W, display: 'block' }}
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
            </marker>
            <marker id="arrow-influence" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#d97706" />
            </marker>
          </defs>

          {/* Étiquettes de colonnes */}
          {[
            { x: 90,  label: 'Origines' },
            { x: 300, label: 'XVIIe-XIXe s.' },
            { x: 510, label: 'Début XXe s.' },
            { x: 720, label: 'Milieu-fin XXe s.' },
            { x: 940, label: "Aujourd'hui" },
          ].map(col => (
            <text key={col.x} x={col.x} y={14} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="sans-serif">
              {col.label}
            </text>
          ))}

          {/* Liens */}
          {liens.map(lien => {
            const src = noeudMap[lien.de]
            const dst = noeudMap[lien.vers]
            if (!src || !dst) return null
            const isInfluence = lien.type === 'influence'
            return (
              <path
                key={`${lien.de}-${lien.vers}`}
                d={bezierPath(src, dst)}
                fill="none"
                stroke={isInfluence ? '#d97706' : '#94a3b8'}
                strokeWidth={isInfluence ? 1.5 : 1.5}
                strokeDasharray={isInfluence ? '5 3' : undefined}
                markerEnd={isInfluence ? 'url(#arrow-influence)' : 'url(#arrow)'}
                opacity={0.75}
              />
            )
          })}

          {/* Nœuds */}
          {noeuds.map(n => {
            const colors = getNodeColors(n)
            const isHovered = hovered === n.id
            const hasLabelBis = Boolean(n.labelBis)
            const hasPeriode = Boolean(n.periode) && !hasLabelBis

            return (
              <g
                key={n.id}
                tabIndex={0}
                role="listitem"
                aria-label={`${n.label}${n.labelBis ? ' ' + n.labelBis : ''}${n.periode ? ', ' + n.periode : ''}${n.note ? '. ' + n.note : ''}`}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n.id)}
                onBlur={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={n.x} y={n.y} width={NW} height={NH}
                  rx={6}
                  fill={colors.fill}
                  stroke={isHovered ? colors.stroke : colors.stroke}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  filter={isHovered ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : undefined}
                />

                {/* Label */}
                {hasLabelBis ? (
                  <>
                    <text
                      x={n.x + NW / 2} y={n.y + 17}
                      textAnchor="middle" fontSize={10.5} fontWeight="600"
                      fill="#1e293b" fontFamily="sans-serif"
                    >
                      {n.label}
                    </text>
                    <text
                      x={n.x + NW / 2} y={n.y + 31}
                      textAnchor="middle" fontSize={10} fontWeight="400"
                      fill="#475569" fontFamily="sans-serif"
                    >
                      {n.labelBis}
                    </text>
                  </>
                ) : hasPeriode ? (
                  <>
                    <text
                      x={n.x + NW / 2} y={n.y + 19}
                      textAnchor="middle" fontSize={10.5} fontWeight="600"
                      fill="#1e293b" fontFamily="sans-serif"
                    >
                      {n.label}
                    </text>
                    <text
                      x={n.x + NW / 2} y={n.y + 35}
                      textAnchor="middle" fontSize={9}
                      fill="#94a3b8" fontFamily="sans-serif"
                    >
                      {n.periode}
                    </text>
                  </>
                ) : (
                  <text
                    x={n.x + NW / 2} y={n.y + NH / 2 + 4}
                    textAnchor="middle" fontSize={10.5} fontWeight="600"
                    fill="#1e293b" fontFamily="sans-serif"
                  >
                    {n.label}
                  </text>
                )}

                {/* Badges héritage */}
                {n.heritage?.map((h, hi) => (
                  <circle
                    key={h}
                    cx={n.x + NW - 8 - hi * 14}
                    cy={n.y + 8}
                    r={5}
                    fill={HERITAGE_COLORS[h]}
                    aria-hidden="true"
                  />
                ))}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Alternative textuelle */}
      <details className="px-5 py-4 border-t border-[var(--color-gris-doux)] bg-[var(--color-plumy-bg)]">
        <summary id="graphe-description" className="text-sm font-[var(--font-titre)] font-semibold text-[var(--color-encre)] cursor-pointer">
          Version texte du schéma
        </summary>
        <div className="mt-3 space-y-4 text-sm">
          <section aria-label="Nœuds du graphe">
            <h3 className="font-semibold text-[var(--color-encre)] mb-2">Disciplines et origines :</h3>
            <ul className="space-y-1 text-[var(--color-gris-texte)]">
              {noeuds.map(n => (
                <li key={n.id}>
                  <strong>{n.label}{n.labelBis ? ' ' + n.labelBis : ''}</strong>
                  {n.periode && ` (${n.periode})`}
                  {n.heritage && n.heritage.length > 0 && (
                    <span className="text-[var(--color-candy-rose)]"> — héritage : {n.heritage.join(', ')}</span>
                  )}
                  {n.note && <span> — {n.note}</span>}
                </li>
              ))}
            </ul>
          </section>
          <section aria-label="Relations entre disciplines">
            <h3 className="font-semibold text-[var(--color-encre)] mb-2">Relations :</h3>
            <ul className="space-y-0.5 text-[var(--color-gris-texte)]">
              {liens.map(l => {
                const src = noeudMap[l.de]
                const dst = noeudMap[l.vers]
                if (!src || !dst) return null
                return (
                  <li key={`${l.de}-${l.vers}`}>
                    {src.label}{src.labelBis ? ' ' + src.labelBis : ''}
                    {' → '}
                    {dst.label}{dst.labelBis ? ' ' + dst.labelBis : ''}
                    {l.type === 'influence' && ' (influence)'}
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </details>
    </div>
  )
}
