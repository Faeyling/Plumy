import { describe, it, expect } from 'vitest'
import { validerSauvegarde, SCHEMA_VERSION } from './sauvegardeService'

const sauvegardeValide = {
  version: SCHEMA_VERSION,
  exporteLe: new Date().toISOString(),
  progression: [{ termeId: 'plie', statut: 'vu', reussitesQuiz: 1, echecsQuiz: 0 }],
  stats: { points: 42 },
  termesPersonnels: [],
}

describe('validerSauvegarde', () => {
  it('accepte une sauvegarde valide', () => {
    expect(() => validerSauvegarde(sauvegardeValide)).not.toThrow()
  })

  it('retourne l\'objet typé', () => {
    const result = validerSauvegarde(sauvegardeValide)
    expect(result.version).toBe(SCHEMA_VERSION)
    expect(result.progression).toHaveLength(1)
  })

  it('rejette null', () => {
    expect(() => validerSauvegarde(null)).toThrow('Format invalide')
  })

  it('rejette une chaîne', () => {
    expect(() => validerSauvegarde('texte')).toThrow('Format invalide')
  })

  it('rejette si version absente', () => {
    const { version: _v, ...sans } = sauvegardeValide
    expect(() => validerSauvegarde(sans)).toThrow('champs manquants')
  })

  it('rejette si exporteLe absent', () => {
    const { exporteLe: _e, ...sans } = sauvegardeValide
    expect(() => validerSauvegarde(sans)).toThrow('champs manquants')
  })

  it('rejette si progression n\'est pas un tableau', () => {
    expect(() => validerSauvegarde({ ...sauvegardeValide, progression: 'oops' })).toThrow('progression manquante')
  })

  it('accepte une progression vide', () => {
    expect(() => validerSauvegarde({ ...sauvegardeValide, progression: [] })).not.toThrow()
  })

  it("rejette un tableau JSON brut (version et exporteLe absents)", () => {
    expect(() => validerSauvegarde([])).toThrow('invalide')
  })
})
