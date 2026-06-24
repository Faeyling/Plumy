import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'
import { useStats } from '@/hooks/useStats'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { BADGES } from '@/data/badges'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

export function ProgresPage() {
  const { stats } = useStats()
  const [termesVus, setTermesVus] = useState(0)
  const [termesMaitrises, setTermesMaitrises] = useState(0)
  const [aRevoir, setARevoir] = useState(0)

  useEffect(() => {
    progressionRepository.list().then(list => {
      setTermesVus(list.filter(p => p.statut !== 'jamais-vu').length)
      setTermesMaitrises(list.filter(p => p.statut === 'maitrise').length)
      setARevoir(list.filter(p => p.statut === 'a-revoir').length)
    })
  }, [])

  const activityData = useMemo(() => {
    const now = Date.now() // eslint-disable-line react-hooks/purity
    const today = new Date(now).toISOString().slice(0, 10)
    return Array.from({ length: 14 }, (_, i) => {
      const d = new Date(now - (13 - i) * 86400000)
      const date = d.toISOString().slice(0, 10)
      const entry = stats?.historiqueActivite.find(a => a.date === date)
      return {
        label: String(d.getDate()),
        termesVus: entry?.termesVus ?? 0,
        quizReussis: entry?.quizReussis ?? 0,
        isToday: date === today,
      }
    })
  }, [stats])

  const maxActivite = Math.max(...activityData.map(d => d.termesVus + d.quizReussis), 1)
  const badgesGagnes = (stats?.badges ?? []).length

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-6 bg-gradient-to-b from-[var(--color-candy-lavande-light)] to-[var(--color-plumy-bg)]">
        <div className="flex items-center gap-4">
          <PluмyMascot etat={stats && stats.points > 0 ? 'reussite' : 'accueil'} taille={72} />
          <div>
            <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
              {fr.progres.titre}
            </h1>
            <p className="text-sm text-[var(--color-gris-texte)] mt-0.5">
              {fr.accueil.serieLabel(stats?.serieJours ?? 0)} 🔥
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 px-4 py-5 space-y-6">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label={fr.progres.points} value={stats?.points ?? 0} color="var(--color-candy-lavande)" />
          <StatCard label={fr.progres.serie} value={stats?.serieJours ?? 0} color="var(--color-candy-menthe)" suffix="j" />
          <StatCard label={fr.progres.termesVus} value={termesVus} color="var(--color-plumy-blue)" />
          <StatCard label={fr.progres.termesMaîtrises} value={termesMaitrises} color="var(--color-candy-menthe)" />
        </div>

        {/* Termes à revoir callout */}
        {aRevoir > 0 && (
          <Link
            to="/revision"
            className="flex items-center justify-between p-4 bg-[#fce4ec] border border-[var(--color-candy-corail)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
          >
            <div>
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-candy-corail)] text-base">
                {fr.revision.compte(aRevoir)}
              </p>
              <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">
                Commencer la révision →
              </p>
            </div>
            <span className="text-2xl text-[var(--color-candy-corail)]">↩</span>
          </Link>
        )}

        {/* Activité — bar chart */}
        <section>
          <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
            {fr.progres.activiteRecente}
          </h2>
          <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4">
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={activityData} barSize={8} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 9, fill: '#aaa' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide domain={[0, maxActivite]} />
                <Bar dataKey="termesVus" radius={[3, 3, 0, 0]} stackId="a">
                  {activityData.map((entry, i) => (
                    <Cell key={i} fill={entry.isToday ? '#7c3aed' : '#c4b5fd'} />
                  ))}
                </Bar>
                <Bar dataKey="quizReussis" radius={[3, 3, 0, 0]} stackId="a" fill="#f9a8d4" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-2 justify-center">
              <LegendDot color="#c4b5fd" label="Termes vus" />
              <LegendDot color="#f9a8d4" label="Quiz réussis" />
            </div>
          </div>
        </section>

        {/* Badges */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base">
              {fr.progres.badges}
            </h2>
            <span className="text-xs text-[var(--color-gris-texte)]">
              {badgesGagnes} / {BADGES.length}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {BADGES.map(badge => {
              const earned = stats?.badges.includes(badge.id) ?? false
              return (
                <div
                  key={badge.id}
                  className={`rounded-[var(--radius-card)] p-3 flex flex-col items-center gap-1 text-center transition-opacity ${
                    earned ? 'bg-white shadow-[var(--shadow-card)]' : 'bg-[var(--color-gris-doux)] opacity-40'
                  }`}
                  title={badge.description}
                >
                  <span className="text-xl" style={{ color: earned ? badge.couleur : '#bbb' }}>
                    {badge.symbole}
                  </span>
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-[10px] leading-tight">
                    {badge.nom}
                  </p>
                  {!earned && (
                    <p className="text-[9px] text-[var(--color-gris-texte)] leading-tight">
                      {badge.description}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
          {badgesGagnes === 0 && (
            <p className="text-[var(--color-gris-texte)] text-sm text-center mt-3">
              {fr.progres.aucunBadge}
            </p>
          )}
        </section>
      </div>
    </div>
  )
}

function StatCard({ label, value, color, suffix = '' }: {
  label: string
  value: number
  color: string
  suffix?: string
}) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-card)] text-center">
      <p className="font-[var(--font-titre)] font-extrabold text-3xl" style={{ color }}>
        {value}{suffix}
      </p>
      <p className="text-xs text-[var(--color-gris-texte)] mt-1">{label}</p>
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-[10px] text-[var(--color-gris-texte)]">{label}</span>
    </div>
  )
}
